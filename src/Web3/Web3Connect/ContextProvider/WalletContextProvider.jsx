import React, { useState, useEffect, createContext, useCallback } from "react";

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

  const switchNetwork = (networkConfiguration) => {
    walletProvider.request(networkConfiguration);
  };

  useEffect(() => {
    if (walletProvider) {
      walletProvider.on("chainChanged", (chainId) => {
        window.location.reload();
      });
      walletProvider.on("accountsChanged", (accounts) => {
        window.location.reload();
      });
    }
  }, [walletProvider]);
  return (
    <WalletContext.Provider
      value={{
        walletProvider,
        setWalletProvider,
        getAddresses,
        getChainId,
        switchNetwork,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletContextProvider };
