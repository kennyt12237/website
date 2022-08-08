import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

interface Props {
  showModal: boolean;
  onModalClose: (provider: any) => any;
  options?: Array<String>;
}

const WEB3_MODAL_ID: string = "modal-root";
export default function Web3Modal({
  showModal,
  onModalClose,
  options,
}: Props): JSX.Element {
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
    document.getElementById(WEB3_MODAL_ID)!
  );
}
