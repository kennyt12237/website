import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Web3Modal } from "../../../Web3";
import { WalletContext } from "../../../Web3";

export default function WalletButton(props) {
  const { src } = props;
  const [showModal, setShowModal] = useState();
  const navigate = useNavigate();
  const { walletProvider, setWalletProvider } = useContext(WalletContext);

  const onModalClose = (promise) => {
    promise
      .then((result) => {
        setWalletProvider(result);
      })
      .catch((error) => console.log(error))
      .finally(() => setShowModal(false));
  };

  useEffect(() => {
    if (walletProvider) {
      navigate("/website/projects");
    }
  }, [walletProvider]);

  return (
    <div>
      <Web3Modal showModal={showModal} onModalClose={onModalClose} />
      {walletProvider ? (
        <div
          className="wallet-container"
          onClick={() => setWalletProvider(null)}
        >
          <img
            className="wallet-container__image"
            src={src}
            alt="Wallet Button"
          />
          <p> Disconnect </p>
        </div>
      ) : (
        <div className="wallet-container" onClick={() => setShowModal(true)}>
          <img
            className="wallet-container__image"
            src={src}
            alt="Wallet Button"
          />
          <p> Connect Wallet </p>
        </div>
      )}
    </div>
  );
}
