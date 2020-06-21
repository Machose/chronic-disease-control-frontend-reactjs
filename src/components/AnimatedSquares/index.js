import React, { Component } from "react";
import { connect } from "react-redux"; //conecta o componente com o estado do redux

import { Container, SquaresContainer, Square, Title, Text } from "./styles";

class AnimatedSquares extends Component {
   state = {
      squares: [],
   };

   componentDidMount() {
      let squares = [];

      const random = (min, max) => Math.random() * (max - min) + min;

      for (let i = 0; i <= 12; i++) {
         const size = Math.floor(random(20, 120));
         const position = Math.floor(random(1, 99));
         const animationDelay = random(0.1, 6);
         const duration = Math.floor(random(6, 24));

         const square = { size, position, animationDelay, duration };
         squares.push(square);
      }
      this.setState({ squares: squares });
   }

   render() {
      const { page } = this.props;
      const { squares } = this.state;

      return (
         <Container attributes={{ page }}>
            <SquaresContainer>
               {squares.map((square, index) => (
                  <Square
                     key={index}
                     size={square.size}
                     position={square.position}
                     animationDelay={square.animationDelay}
                     duration={square.duration}
                  ></Square>
               ))}
            </SquaresContainer>
            <Square />
            <Title>
               {page === "singIn" ? "Bem Vindo de Volta!" : "Seja Bem Vindo!"}
            </Title>
            <Text>
               {page === "singIn"
                  ? "Já estávamos com saudades da sua companhia"
                  : "Cadastre-se agora para que nós possamos lhe auxiliar no tratamento de sua saúde!"}
            </Text>
         </Container>
      );
   }
}

export default connect((state) => ({
   page: state.login.page,
}))(AnimatedSquares);
