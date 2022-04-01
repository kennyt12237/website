import React from "react";
import "../scss/UnsupportedNetwork.scss";

export default function UnsupportedNetwork() {
  return (
    <div className="invalid-network-container">
      <div className="invalid-network-container__title">
        <img className="invalid-network-container__title__image" src="./exclamation-circle.svg" alt="Exclamation Mark" />
        Unsupported Network
      </div>
      <div className="invalid-network-container__body">
        Connect To Ropsten Testnet
      </div>
    </div>
  );
}
