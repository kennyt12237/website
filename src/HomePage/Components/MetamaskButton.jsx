import React, { useContext, useEffect } from "react";
import { MetamaskContext } from "../../Web3/context/MetamaskProvider";
import { WalletContext } from "../../Web3/context/WalletContextProvider";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../../Notification/context/NotificationContextProvider";

export default function MetamaskButton() {
  const {
    connectToMetamask,
    disconnectFromMetamask,
    setOnAccountsChanged,
    setOnAccountConnectedSuccess,
    setOnAccountConnectedFailure,
    setOnChainChanged,
    setOnProviderNotDetected,
    setOnEthereumNotDetected,
  } = useContext(MetamaskContext);
  const { getConnectedStatus } = useContext(WalletContext);
  const { successAlert, failedAlert } = useContext(NotificationContext);

  const navigate = useNavigate();

  const providerNotDetected = () => {
    failedAlert("Please install Metamask");
  };

  const providerNotEthereum = (result) => {
    alert("Provider is not Ethereum");
  };

  const handleAccountConnected = (account) => {
    successAlert("Account connected successfully");
  };

  const handleAccountChanged = (account) => {
    successAlert("Account connected or changed");
  };

  const handleAccountFailed = (error) => {
    failedAlert("Account failed to connect");
  };

  const handleChainChanged = (chain) => {
    successAlert("Connected to " + chain);
  };

  const handleMetamaskButtonClicked = () => {
    connectToMetamask();
  };

  const handleDisconnectButtonClicked = () => {
    disconnectFromMetamask();
    successAlert("Disconnected Successfully");
  };

  useEffect(() => {
    setOnAccountConnectedSuccess(() => handleAccountConnected);
    setOnAccountConnectedFailure(() => handleAccountFailed);
    setOnAccountsChanged(() => handleAccountChanged);
    setOnChainChanged(() => handleChainChanged);
    setOnProviderNotDetected(() => providerNotDetected);
    setOnEthereumNotDetected(() => providerNotEthereum);
  }, []);

  useEffect(() => {
    if (getConnectedStatus()) {
      navigate("/projects");
    }
  }, [getConnectedStatus]);

  return (
    <div>
      {getConnectedStatus() ? (
        <div
          className="wallet-container"
          onClick={() => handleDisconnectButtonClicked()}
        >
          <img
            className="wallet-container__image"
            src="metamask.png"
            alt="Metamask Logo"
          />
          <p> Disconnect </p>
        </div>
      ) : (
        <div
          className="wallet-container"
          onClick={() => handleMetamaskButtonClicked()}
        >
          <img
            className="wallet-container__image"
            src="metamask.png"
            alt="Metamask Logo"
          />
          <p> Connect Wallet </p>
        </div>
      )}
    </div>
  );
}
