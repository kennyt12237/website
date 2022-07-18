import React, { useState, createContext, useCallback } from "react";

const WalletContext = createContext();

function WalletContextProvider(props) {
  const { children } = props;
  const [walletProvider, setWalletProvider] = useState();

  const getAddresses = useCallback(() => {
    return walletProvider.selectedAddress;
  }, [walletProvider]);

  const getChainId = useCallback(() => {
    return walletProvider.chainId;
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
