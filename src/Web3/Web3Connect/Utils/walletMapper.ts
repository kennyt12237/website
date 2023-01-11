import {
    validProviders,
    checkSupportedProvider,
} from "../Utils/ValidProviders";
import ProviderResource from "../Utils/ProviderResource";

interface WalletDetails {
    name: string,
    imageSrc: string,
    provider: any,
}

function walletProviderMapper(options?: Array<String>): Array<WalletDetails> {
    const ethereum: any = window.ethereum;
    const injectedProviders: any = ethereum ? ethereum.providers ? ethereum.providers : new Array(ethereum) : null;
    const getMetamaskProvider = (): any => {
        if (injectedProviders) {
            for (let i = 0; i < injectedProviders.length; i++) {
                if (injectedProviders[i].isMetaMask) {
                    return injectedProviders[i];
                }
            }
        }
        return null;
    };

    const getCoinbaseProvider = (): any => {
        if (injectedProviders) {
            for (let i = 0; i < injectedProviders.length; i++) {
                if (injectedProviders[i].isCoinbaseWallet) {
                    return injectedProviders[i];
                }
            }
        }
        return null;
    };

    const getProvider = (selectedProvider: string): any => {
        switch (selectedProvider) {
            case "coinbase":
                return getCoinbaseProvider();
            case "metamask":
                return getMetamaskProvider();
            default:
                return null;
        }
    };

    const providersEnabled: Array<String> = !options ? validProviders : options;
    const providersMapping: Array<WalletDetails> = ProviderResource.map((provider) => {
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
