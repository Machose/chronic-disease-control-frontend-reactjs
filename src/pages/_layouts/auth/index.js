import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Header, Main } from "./styles";

export default function AuthLayout({ children }) {
   return (
      <Wrapper>
         <Header>Controle de doenças crônicas</Header>
         <Main>{children}</Main>
      </Wrapper>
   );
}

AuthLayout.prototype = {
   children: PropTypes.element.isRequired,
};
