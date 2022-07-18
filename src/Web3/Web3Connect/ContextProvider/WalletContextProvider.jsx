import React, { useState, createContext } from "react";

const WalletContext = createContext();

function WalletContextProvider(props) {
  const { children } = props;
  const [walletProvider, setWalletProvider] = useState();

  const getAddresses = () => {
    return walletProvider._addresses;
  }

  const getChainId = () => {
    return walletProvider.chainId;
  }
  return (
    <WalletContext.Provider value={{ walletProvider, setWalletProvider, getAddresses, getChainId }}>
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletContextProvider };
