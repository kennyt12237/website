import React, { useState, createContext } from "react";
import Web3 from "web3";

const Web3Context = createContext();

function Web3ContextProvider(props) {
  const { children } = props;

  const [web3Object, setWeb3Object] = useState();
  const [smartContract, setSmartContract ] = useState();

  const setWeb3 = (provider) => {
    setWeb3Object(new Web3(provider));
  };

  const getWeb3 = () => {
    return web3Object;
  };

  const getSmartContract = () => {
      return smartContract;
  }

  return (
    <Web3Context.Provider value={{ setWeb3, getWeb3, setSmartContract, getSmartContract }}>
      {children}
    </Web3Context.Provider>
  );
}

export { Web3Context, Web3ContextProvider };
