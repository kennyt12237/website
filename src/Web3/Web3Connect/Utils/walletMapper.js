import {
  validProviders,
  checkSupportedProvider,
} from "../Utils/ValidProviders";
import ProviderResource from "../Utils/ProviderResource";

function walletProviderMapper(options) {
  const ethereum = window.ethereum;
  const injectedProviders = ethereum ? ethereum.providers : null;

  const getMetamaskProvider = () => {
    if (injectedProviders) {
      for (let i = 0; i < injectedProviders.length; i++) {
        if (injectedProviders[i].isMetaMask) {
          return injectedProviders[i];
        }
      }
    }
    return null;
  };

  const getCoinbaseProvider = () => {
    if (injectedProviders) {
      for (let i = 0; i < injectedProviders.length; i++) {
        if (injectedProviders[i].isCoinbaseWallet) {
          return injectedProviders[i];
        }
      }
    }
    return null;
  };

  const getProvider = (selectedProvider) => {
    switch (selectedProvider) {
      case "coinbase":
        return getCoinbaseProvider();
      case "metamask":
        return getMetamaskProvider();
      default:
        return null;
    }
  };

  const providersEnabled = !options ? validProviders : options;
  const providersMapping = ProviderResource.map((provider) => {
    if (
      providersEnabled.includes(provider.name) &&
      checkSupportedProvider(provider.name)
    ) {
      provider.provider = getProvider(provider.name);
    }
    return provider;
  });

  return providersMapping;
}

export { walletProviderMapper };
