interface WalletDetails {
    name: string,
    imageSrc: string,
    provider: any,
}

export const metamask: WalletDetails = {
    name: "metamask",
    imageSrc: "metamask.png",
    provider: null
};

export const coinbase: WalletDetails = {
    name: "coinbase",
    imageSrc: "coinbase.svg",
    provider: null
};

const ProviderResource: Array<WalletDetails> = [metamask, coinbase];

export default ProviderResource;