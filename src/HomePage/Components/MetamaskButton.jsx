import React, { useContext, useEffect, useState } from "react";
import { MetamaskContext } from "../../Web3/context/MetamaskProvider";
import { WalletContext } from "../../Web3/context/WalletContextProvider";
import { useNavigate } from "react-router-dom";
import useNotification from "../../Notification/hook/useNotification";
import { checkSupportedChain } from "../../Web3/ChainList/chainList";

export default function MetamaskButton() {
  const [validNetwork, setValidNetwork] = useState();
  const {
    getChainId,
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
      navigate("/projects");
    }
  }, [getConnectedStatus]);

  useEffect(() => {
    if (getConnectedStatus() && getChainId()) {
      const chainId = getChainId();
      if (checkSupportedChain(chainId.substr(2))) {
        setValidNetwork(true);
      } else {
        setValidNetwork(false);
      }
    }
  }, [getConnectedStatus, getChainId]);
  return (
    <div>
      {getConnectedStatus() ? (
        validNetwork ? (
          <div>
            <div>Ropsten Testnet</div>
            <div
              className="wallet-container"
              onClick={() => handleDisconnectButtonClicked()}
            >
              <p> Disconnect </p>
            </div>
          </div>
        ) : (
          <div>
            <div>Wrong Network</div>
            <div
              className="wallet-container"
              onClick={() => handleDisconnectButtonClicked()}
            >
              <p> Disconnect </p>
            </div>
          </div>
        )
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
