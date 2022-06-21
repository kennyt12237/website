import React from "react";
import { AppRoute } from "./ClientRoute";
import { projects } from "./Contracts/Project";
import { MetamaskHelper } from "./Web3";
import { useDispatch } from "react-redux";
import "./App.scss";

function App() {

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
  } = MetamaskHelper();
  return <AppRoute projects={projects} />;
}

export default App;
