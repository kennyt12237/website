interface Network {
    method: string,
    params: Array<Object>,
}

const ropstenNetwork: Network = {
    method: "wallet_switchEthereumChain",
    params: [
        {
            chainId: "0x3",
        },
    ],
};

export { ropstenNetwork };
