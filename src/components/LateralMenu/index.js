import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import {
   GiMedicines,
   GiFruitBowl,
   GiSoccerBall,
   GiAlarmClock,
} from "react-icons/gi";

import { Container } from "./styles";

function LateralMenu() {
   return (
      <Container>
         <ul>
            <li>
               <Link to="/dashboard">
                  <FaHome />
                  <span>Home</span>
               </Link>
            </li>
            <li>
               <Link to="/medicines">
                  <GiMedicines />
                  <span>Medicamentos</span>
               </Link>
            </li>
            <li>
               <Link to="/foods">
                  <GiFruitBowl />
                  <span>Alimentos</span>
               </Link>
            </li>
            <li>
               <Link to="/physicalActivities">
                  <GiSoccerBall />
                  <span>Atividades Físicas</span>
               </Link>
            </li>
            <li>
               <Link to="/routines">
                  <GiAlarmClock />
                  <span>Rotinas</span>
               </Link>
            </li>
         </ul>
      </Container>
   );
}

export default LateralMenu;
