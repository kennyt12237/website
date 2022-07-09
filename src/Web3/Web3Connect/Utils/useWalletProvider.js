import React, { useMemo } from "react";

export default function useWalletProvider(selectedProvider) {
  const ethereum = window.ethereum;
  const injectedProviders = ethereum.providers;

  const getMetamaskProvider = () => {
    for (let i = 0; i < injectedProviders.length; i++) {
      if (injectedProviders[i].isMetaMask) {
        return injectedProviders[i];
      }
    }
    return null;
  };

  const getCoinbaseProvider = () => {
    for (let i = 0; i < injectedProviders.length; i++) {
      if (injectedProviders[i].isCoinbaseWallet) {
        return injectedProviders[i];
      }
    }
    return null;
  };

  const provider = useMemo(() => {
    switch (selectedProvider) {
      case "coinbase":
        return getCoinbaseProvider();
      case "metamask":
        return getMetamaskProvider();
      default:
        return null;
    }
  }, [selectedProvider]);

  return provider;
}
