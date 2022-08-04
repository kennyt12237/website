import React, { useState, useEffect, createContext, useCallback } from "react";

interface Props {
  children: JSX.Element;
}
const WalletContext: React.Context<any> = createContext<any>(null);

function WalletContextProvider({ children }: Props): JSX.Element {
  const [walletProvider, setWalletProvider] = useState<any>();

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

  const switchNetwork = (networkConfiguration: any) => {
    walletProvider.request(networkConfiguration);
  };

  useEffect(() => {
    if (walletProvider) {
      walletProvider.on("chainChanged", () => {
        window.location.reload();
      });
      walletProvider.on("accountsChanged", () => {
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
