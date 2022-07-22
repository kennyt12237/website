import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

const WEB3_MODAL_ID = "modal-root";
export default function Web3Modal(props) {
  const { showModal, onModalClose, options } = props;

  const createModalElement = useCallback(() => {
    const element = document.createElement("div");
    element.id = WEB3_MODAL_ID;
    document.body.appendChild(element);
  }, []);

  if (!document.getElementById(WEB3_MODAL_ID)) {
    createModalElement();
  }

  return ReactDOM.createPortal(
    <Modal
      showModal={showModal}
      onModalClose={onModalClose}
      options={options}
    />,
    document.getElementById(WEB3_MODAL_ID)
  );
}
