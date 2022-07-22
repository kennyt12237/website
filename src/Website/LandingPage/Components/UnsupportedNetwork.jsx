import React from "react";
import { useContext } from "react";
import { WalletContext } from "../../../Web3";
import { ropstenNetwork } from "../../ClientRoute/ChainRoute";
import "../scss/UnsupportedNetwork.scss";

export default function UnsupportedNetwork(props) {
  const { chainInText } = props;
  const { switchNetwork } = useContext(WalletContext);

  return (
    <div className="invalid-network-container">
      <div className="invalid-network-container__title">
        <img
          className="invalid-network-container__title__image"
          src="./exclamation-circle.svg"
          alt="Exclamation Mark"
        />
        {`${chainInText} is not supported`}
      </div>
      <div className="invalid-network-container__body">
        <button onClick={() => switchNetwork(ropstenNetwork)}>
          Connect To Ropsten Testnet
        </button>
      </div>
    </div>
  );
}
