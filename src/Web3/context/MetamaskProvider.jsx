import React, { useState, createContext, useEffect } from 'react';
import Metamask from '../MetamaskAPI/Metamask';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';

const MetamaskContext = createContext();

function MetamaskProvider({children}) {

	const [walletAddress, setWalletAddress] = useState();
	const [ provider, setProvider ] = useState();
	const [ web3, setWeb3 ] = useState();
	
	const { checkProvider, connectToMetamask, setHandleAccountsChanged, setHandleChainChanged } = Metamask();
	useEffect(() => {
		if (provider) {
			setWeb3(new Web3(provider));
		}
	}, [provider]);

	useEffect(() => {
		const EthProvider = async () => {
			await detectEthereumProvider().then((response) => {
				setProvider(response);
			 });
		}
		EthProvider();
	}, []);

	const connectToMetamaskAndSetBasicFunc = async (providerIsNull, providerNotEthereum, handleAccountChanged, handleAccountFailed, handleChainChanged) => {
		const validProvider = checkProvider(providerIsNull, providerNotEthereum, provider);
		const handleWalletConnected = address => {
			setWalletAddress(address);
		}

		if (validProvider) {
			await connectToMetamask(handleWalletConnected, handleAccountFailed);
			setHandleAccountsChanged(handleAccountChanged);
			setHandleChainChanged(handleChainChanged);
		}

		return true;
	}

	return (
		<MetamaskContext.Provider value={{ provider, web3, walletAddress, connectToMetamaskAndSetBasicFunc }}>
			{children}
		</MetamaskContext.Provider>
	);
}

export {
	MetamaskContext,
	MetamaskProvider,
}