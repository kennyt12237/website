interface Network {
    method: string,
    params: Array<Object>,
}

const goerliNetwork: Network = {
    method: "wallet_switchEthereumChain",
    params: [
        {
            chainId: "0x5",
        },
    ],
};


export { goerliNetwork };
