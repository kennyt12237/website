import React, { useContext } from "react";
import {MetamaskContext, ropstenNetwork } from "../../Web3/";
import { useNotification } from "../../Notification";

import "../scss/UnsupportedNetwork.scss";

export default function UnsupportedNetwork() {
  const { failedAlert } = useNotification();
  return (
    <div className="invalid-network-container">
      <div className="invalid-network-container__title">
        <img className="invalid-network-container__title__image" src="./exclamation-circle.svg" alt="Exclamation Mark" />
        Unsupported Network
      </div>
      <div className="invalid-network-container__body">
        <button> Connect To Ropsten Testnet </button>
      </div>
    </div>
  );
}
