import React, { Component } from "react";

import SingIn from "../../components/SingIn";
import SingUp from "../../components/SingUp";
import AnimatedSquares from "../../components/AnimatedSquares";

import { Container } from "./styles";

export default class Login extends Component {
   render() {
      return (
         <Container>
            <SingUp />
            <AnimatedSquares />
            <SingIn />
         </Container>
      );
   }
}
