import React, { useContext, useEffect } from "react";
import { MetamaskContext, WalletContext } from "../../Web3";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../Notification";

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
  const { failedAlert, successAlert } = useNotification();

  const navigate = useNavigate();

  const providerNotDetected = () => {
    failedAlert("Please install Metamask");
  };

  const providerNotEthereum = (result) => {
    alert("Provider is not Ethereum");
  };

  const handleAccountChanged = (account) => {
    successAlert("Account changed successfully");
  };

  const handleSuccessConnection = (account) => {
    successAlert("Connected Successfully");
  };

  const handleFailedConnection = (error) => {
    failedAlert("Account failed to connect");
  };

  const handleChainChanged = (chain) => {
    successAlert("Connected to " + chain);
  };

  useEffect(() => {
    setOnAccountsChanged(() => handleAccountChanged);
    setOnAccountConnectedSuccess(() => handleSuccessConnection);
    setOnAccountConnectedFailure(() => handleFailedConnection);
    setOnChainChanged(() => handleChainChanged);
    setOnProviderNotDetected(() => providerNotDetected);
    setOnEthereumNotDetected(() => providerNotEthereum);
  }, []);

  const handleMetamaskButtonClicked = async () => {
    await connectToMetamask();
  };

  const handleDisconnectButtonClicked = () => {
    disconnectFromMetamask();
    successAlert("Disconnected Successfully");
  };

  useEffect(() => {
    if (getConnectedStatus()) {
      navigate("/website/projects");
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
            src={process.env.PUBLIC_URL + "/metamask.png"}
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
