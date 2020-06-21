import React from "react";
import PropTypes from "prop-types";

import { Main, Wrapper, Component } from "./styles";

import Header from "../../../components/Header";
import LateralMenu from "./../../../components/LateralMenu";

export default function DefaultLayout({ children }) {
   return (
      <Wrapper>
         <Header />
         <Main>
            <LateralMenu />

            <Component>{children}</Component>
         </Main>

         {/* <Footer>Rodapé</Footer> */}
      </Wrapper>
   );
}

DefaultLayout.prototype = {
   children: PropTypes.element.isRequired,
};
