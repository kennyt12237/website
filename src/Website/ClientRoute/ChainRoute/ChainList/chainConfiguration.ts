interface Network {
    method: string,
    params: Array<Object>,
}

const SepoliaNetwork: Network = {
    method: "wallet_switchEthereumChain",
    params: [
        {
            chainId: "0xaa36a7",
        },
    ],
};

const AddSepoliaNetwork: Network = {
    method: 'wallet_addEthereumChain',
    params: [{
        chainId: '0xaa36a7',
        chainName: 'Sepolia Testnet',
        nativeCurrency: {
            name: 'SepoliaETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://rpc.sepolia.org'],
        blockExplorerUrls: ['https://sepolia.etherscan.io']
    }],
}


export { SepoliaNetwork, AddSepoliaNetwork};
