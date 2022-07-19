import React, { useState, createContext, useCallback } from "react";

const WalletContext = createContext();

function WalletContextProvider(props) {
  const { children } = props;
  const [walletProvider, setWalletProvider] = useState();

  const getAddresses = useCallback(() => {
    if (walletProvider) {
      return walletProvider.selectedAddress;
    }
    return null;
  }, [walletProvider]);

  const getChainId = useCallback(() => {
    if (walletProvider) {
      return walletProvider.chainId;
    }
    return null;
  }, [walletProvider]);

  return (
    <WalletContext.Provider
      value={{ walletProvider, setWalletProvider, getAddresses, getChainId }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletContextProvider };