import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

// useField -> api para conectar o input (campo) com o unform

import { InputBlock } from "./styles";

export default function Input({ name, label, ...rest }) {
   const inputRef = useRef(null);
   const { fieldName, registerField, defaultValue, error } = useField(name);

   useEffect(() => {
      registerField({
         name: fieldName,
         ref: inputRef.current,
         path: "value"
      });
   }, [fieldName, registerField]); //dispara uma função sempre que []

   return (
      <InputBlock>
         <label htmlFor={rest.id}>{label}</label>
         <input ref={inputRef} {...rest} defaultValue={defaultValue} />

         {error && <span style={{ color: "#f00" }}>{error} </span>}
      </InputBlock>
   );
}

// fieldName      ->  nome final do input
// registerField  ->  Fução disparada assim que o componente é montado em tela

// {...rest} pega as demais propriedade alem do name e passa pro input

// unform -> uncontroller form
// Não anotar os dados de um input enquanto o usuario digita
