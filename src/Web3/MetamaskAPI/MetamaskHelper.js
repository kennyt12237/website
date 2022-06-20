import React, { useState, useEffect } from "react";
import Metamask from "./Metamask";
import detectEthereumProvider from "@metamask/detect-provider";

/*
    Provides default implementation of the Metamask API. 
    User can override methods by calling mutator functions.
*/
export default function MetamaskHelper() {
  const [provider, setProvider] = useState();
  const [onAccountConnectedSuccess, setOnAccountConnectedSuccess] = useState(
    () => () => alert("Successfully Connected")
  );
  const [onAccountConnectedFailure, setOnAccountConnectedFailure] = useState(
    () => () => alert("Failed to Connected")
  );
  const [onAccountChanged, setOnAccountsChanged] = useState(
    () => () => alert("Changed to another account")
  );
  const [onChainChanged, setOnChainChanged] = useState(
    () => () => alert("Switched to another change")
  );
  const [onProviderNotDetected, setOnProviderNotDetected] = useState(
    () => () => alert("Provider not detected")
  );
  const [onEthereumNotDetected, setOnEthereumNotDetected] = useState(
    () => () => alert("Ethereum dot detected")
  );

  useEffect(() => {
    const getEthereumProvider = async () => {
      await detectEthereumProvider().then((response) => {
        setProvider(response);
      });
    };
    getEthereumProvider();
  }, []);

  const {
    getChainIdEthereum,
    checkProvider,
    connectAndRequestToMetamask,
    setHandleAccountsChanged,
    setHandleChainChanged,
    removeAccountsChanged,
    removeChainChanged,
    switchChain,
  } = Metamask();

  const connectToMetamask = async () => {
    const validProvider = checkProvider(
      onProviderNotDetected,
      onEthereumNotDetected,
      provider
    );

    if (validProvider) {
      await connectAndRequestToMetamask(
        onAccountConnectedSuccess,
        onAccountConnectedFailure
      );
      setHandleAccountsChanged(onAccountChanged);
      setHandleChainChanged(onChainChanged);
      return true;
    }
    return false;
  };

  const disconnectFromMetamask = () => {
    removeAccountsChanged(onAccountChanged);
    removeChainChanged(onChainChanged);
  };

  const switchNetwork = (network, pendingMessage) => {
    switchChain(network, pendingMessage);
  };

  return {
    provider,
    setOnAccountConnectedSuccess,
    setOnAccountConnectedFailure,
    setOnAccountsChanged,
    setOnChainChanged,
    setOnProviderNotDetected,
    setOnEthereumNotDetected,
    connectToMetamask,
    disconnectFromMetamask,
    switchNetwork,
  };
}
