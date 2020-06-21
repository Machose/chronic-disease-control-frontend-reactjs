import React, { useState } from "react";
import { MdNotifications } from "react-icons/md";

import {
   Container,
   Badge,
   NotificationList,
   Scroll,
   Notification,
} from "./styles";

function Notifications() {
   const [visible, setVisible] = useState(false);

   // useEffect(() => {}, [])

   function handleToggleVisible() {
      setVisible(!visible);
   }

   return (
      <Container>
         <Badge onClick={handleToggleVisible} hasUnread>
            <MdNotifications color="#fff" size={20} />
         </Badge>

         <NotificationList visible={visible}>
            <Scroll>
               <Notification unread>
                  <p>Você possui um novo agendamento</p>
                  <time>Ha 2 dias</time>
                  <button type="button">Marcar como lida</button>
               </Notification>
               <Notification>
                  <p>Você possui um novo agendamento</p>
                  <time>Ha 2 dias</time>
                  <button type="button">Marcar como lida</button>
               </Notification>
               <Notification>
                  <p>Você possui um novo agendamento</p>
                  <time>Ha 2 dias</time>
                  <button type="button">Marcar como lida</button>
               </Notification>
               <Notification unread>
                  <p>Você possui um novo agendamento</p>
                  <time>Ha 2 dias</time>
                  <button type="button">Marcar como lida</button>
               </Notification>
               <Notification unread>
                  <p>Você possui um novo agendamento</p>
                  <time>Ha 2 dias</time>
                  <button type="button">Marcar como lida</button>
               </Notification>
               <Notification unread>
                  <p>Você possui um novo agendamento</p>
                  <time>Ha 2 dias</time>
                  <button type="button">Marcar como lida</button>
               </Notification>
               <Notification unread>
                  <p>Você possui um novo agendamento</p>
                  <time>Ha 2 dias</time>
                  <button type="button">Marcar como lida</button>
               </Notification>
               <Notification unread>
                  <p>Você possui um novo agendamento</p>
                  <time>Ha 2 dias</time>
                  <button type="button">Marcar como lida</button>
               </Notification>
            </Scroll>
         </NotificationList>
      </Container>
   );
}

export default Notifications;
