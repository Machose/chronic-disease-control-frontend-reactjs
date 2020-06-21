import React from "react";
import { Modal } from "react-bootstrap";

import { ButtonCancel, ButtonDelete } from "./styles";

export default function ExclusionConfirmationModal(props) {
   return (
      <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Excluir esse item ?
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <p>
               Realmente deseja excluir o item <strong>{props.itemname}</strong>{" "}
               ?
            </p>
         </Modal.Body>
         <Modal.Footer>
            <ButtonDelete onClick={props.onDelete}>Excluir</ButtonDelete>
            <ButtonCancel onClick={props.onHide}>Cancelar</ButtonCancel>
         </Modal.Footer>
      </Modal>
   );
}
