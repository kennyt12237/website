import React from "react";
import { AppRoute } from "./ClientRoute";
import { projects } from "./Contracts/Project";
import { MetamaskHelper } from "./Web3";
import { useDispatch } from "react-redux";
import { setWalletProvider, removeWalletProvider } from "./Redux";
import "./App.scss";

function App() {
  const useMetamaskConnected = (provider) => {
    useDispatch(setWalletProvider(provider));
  };

  const useMetamaskDisconnected = (provider) => {
    useDispatch(removeWalletProvider(provider));
  };
  const {
    setOnAccountConnectedSuccess,
    setOnAccountConnectedFailure,
    setOnAccountsChanged,
    setOnChainChanged,
    setOnProviderNotDetected,
    setOnEthereumNotDetected,
    connectToMetamask,
    disconnectFromMetamask,
    switchNetwork,
  } = MetamaskHelper(useMetamaskConnected, useMetamaskDisconnected);
  return <AppRoute projects={projects} />;
}

export default App;
