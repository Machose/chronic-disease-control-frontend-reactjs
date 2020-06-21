import React, { useState, useMemo, useEffect } from "react";
import {
   format,
   subDays,
   addDays,
   setHours,
   setMinutes,
   setSeconds,
   getHours,
   getMinutes,
   isBefore,
   getDay,
   isEqual,
} from "date-fns";
import pt from "date-fns/locale/pt";
import { utcToZonedTime } from "date-fns-tz";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { GiMedicines, GiFruitBowl, GiSoccerBall } from "react-icons/gi";

import api from "../../services/api";

import LoadingAnimation from "../../components/LoadingAnimation";

import soundAlert from "../../assets/sound/house-alarm-clock-loud-sound-effect.mp3";

import { Container, Time, Observation } from "./styles";

export default function Dashboard() {
   const [date, setDate] = useState(new Date());
   const [schedule, setSchedule] = useState([]);
   const [daysWeek, setDaysWeek] = useState([]);
   const [loading, setLoading] = useState(false);
   const [cards, setCards] = useState([]);

   const dateFormatted = useMemo(
      () => format(date, "d 'de' MMMM", { locale: pt }),
      [date]
   );

   useEffect(() => {
      setLoading(true);
      if (!daysWeek.length) {
         async function loadDaysWeek() {
            const response = await api.get("daysWeek");

            const { data } = response;

            setDaysWeek(data);
            setLoading(false);
         }
         loadDaysWeek();
      }

      async function loadSchedule() {
         const weekday = daysWeek.find((day) => day.order === getDay(date));

         if (!weekday) {
            return;
         }

         const medicines = await api.get("medicineRoutines", {
            params: { day_week_id: weekday._id },
         });

         const foods = await api.get("foodRoutines", {
            params: { day_week_id: weekday._id },
         });

         const physicalActivities = await api.get(
            "physicalActivitiesRoutines",
            {
               params: { day_week_id: weekday._id },
            }
         );

         const items = [
            ...medicines.data,
            ...physicalActivities.data,
            ...foods.data,
         ];

         items.sort((a, b) => {
            if (a.schedule > b.schedule) {
               return 1;
            }
            if (a.schedule < b.schedule) {
               return -1;
            }
            // a must be equal to b
            return 0;
         });

         setSchedule(items);

         setLoading(false);
      }

      loadSchedule();
   }, [date, daysWeek]);

   useEffect(() => {
      console.log("a");
      if (schedule.length) {
         function createCardList() {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            const cardList = schedule.map((time) => {
               const { schedule } = time;

               let icon;

               if (time.medicine_id) {
                  icon = <GiMedicines color="#217770" size={36} />;
                  time.name = time.medicine[0].name;
                  time.observation = time.medicine[0].observation;
               } else if (time.food_id) {
                  icon = <GiFruitBowl color="#217770" size={36} />;
                  time.name = time.food[0].name;
                  time.observation = time.food[0].observation;
               } else {
                  icon = <GiSoccerBall color="#217770" size={36} />;
                  time.name = time.physical_activity[0].name;
                  time.observation = time.physical_activity[0].observation;
               }

               const [hours, minutes] = String(schedule).split(":");

               const checkDate = setSeconds(
                  setMinutes(setHours(date, hours), minutes),
                  0
               );

               const compareDate = utcToZonedTime(checkDate, timezone);

               const nowHours = getHours(new Date());
               const nowMinutes = getMinutes(new Date());
               const NowcheckDate = setSeconds(
                  setMinutes(setHours(date, nowHours), nowMinutes),
                  0
               );

               if (isEqual(checkDate, NowcheckDate) && !time.alert) {
                  let audio = new Audio(soundAlert);
                  audio.play();

                  Notification.requestPermission((status) => {
                     let n = new Notification("Alarme", {
                        body: "Verifique suas tarefas no site",
                     });
                  });
               }

               return {
                  _id: time._id,
                  time: `${hours}h:${minutes}m`,
                  past: isBefore(compareDate, new Date()),
                  name: time.name,
                  observation: time.observation,
                  icon,
                  date: checkDate,
                  alert: !time.alert && isEqual(checkDate, NowcheckDate),
               };
            });

            return cardList;
         }

         setCards(createCardList());

         const interval = setInterval(() => {
            setCards(createCardList());
         }, 1000 * 60);
         return () => clearInterval(interval);
      }
   }, [date, schedule]);

   function handlerPrevDay() {
      setDate(subDays(date, 1));
   }

   function handlerNextDay() {
      setDate(addDays(date, 1));
   }

   function handleRemoveAlert(index) {
      const data = cards.slice();

      if (data[index].alert) {
         const scheduleModify = schedule.slice();
         scheduleModify[index].alert = -1;

         setSchedule(scheduleModify);
      }
   }

   // function handleClock() {
   //    if (!schedule.length) {
   //       return;
   //    }
   //    setInterval(() => {
   //       const nowHours = getHours(new Date());
   //       const nowMinutes = getMinutes(new Date());
   //       const NowcheckDate = setSeconds(
   //          setMinutes(setHours(date, nowHours), nowMinutes),
   //          0
   //       );
   //       schedule.forEach((time) => {
   //          console.log(isEqual(time.date, NowcheckDate));
   //       });
   //       const alert = schedule.find((time) => isEqual(time.date, new Date()));
   //       let audio = new Audio(soundAlert);
   //       audio.play();
   //       if (alert) {
   //       }
   //    }, 1000 * 60);
   // }

   return (
      <Container>
         <header>
            <button type="button" onClick={handlerPrevDay}>
               <MdChevronLeft size={36} color="#fff" />
            </button>
            <strong>{dateFormatted}</strong>
            <button type="button" onClick={handlerNextDay}>
               <MdChevronRight size={36} color="#fff" />
            </button>
         </header>

         {loading ? (
            <LoadingAnimation />
         ) : schedule.length <= 0 ? (
            <Observation>Nenhum agendamento marcado para hoje</Observation>
         ) : (
            <ul>
               {cards.map((time, index) => (
                  <Time
                     key={time._id}
                     past={time.past}
                     available={!time.appointment}
                     alert={time.alert}
                     onMouseEnter={() => handleRemoveAlert(index)}
                  >
                     <div>
                        <strong>{time.time}</strong>
                        {time.icon}
                     </div>

                     <span>{time.name}</span>
                     <p className="observations">{time.observation}</p>
                  </Time>
               ))}
            </ul>
         )}
      </Container>
   );
}
