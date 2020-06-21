import React, { Fragment, useState, useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { InputBlock } from "./styles";

export default function CheckBox({ name, options, multiple, ...rest }) {
   const inputRef = useRef(null);
   const { fieldName, registerField, defaultValue } = useField(name);
   const [value, setValue] = useState(defaultValue);

   const threatAsCheckbox = !!(multiple || options.length === 1);
   const nativeField = threatAsCheckbox ? "checkbox" : "radio";

   useEffect(() => {
      registerField({
         name: fieldName,
         ref: inputRef.current,
         path: "value",
      });
   }, [fieldName, registerField]);

   function handleChange(e) {
      const { checked: toAdd, value: fieldVal } = e.target;
      if (multiple) {
         const newVal = toAdd
            ? [...Array.from(value || []), fieldVal]
            : Array.from(value).filter((v) => v !== e.target.value);
         setValue(newVal);
      } else {
         setValue(toAdd ? fieldVal : "");
      }
   }

   function checked(val) {
      if (multiple) {
         return Array.from(value || []).includes(val);
      }
      return value === val;
   }

   return options.map((option) => {
      const checkboxId = `${fieldName}-${option._id}`;

      return (
         <InputBlock key={checkboxId}>
            <input
               {...rest}
               type={nativeField}
               id={checkboxId}
               name={fieldName}
               aria-label={checkboxId}
               onChange={handleChange}
               value={option._id}
               checked={checked(option._id)}
               ref={inputRef}
            />

            <label htmlFor={checkboxId}>{option.name[0]}</label>
         </InputBlock>
      );
   });
}
