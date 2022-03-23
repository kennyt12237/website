import React, { useState, createContext, useEffect, useContext } from 'react';
import Metamask from '../MetamaskAPI/Metamask';
import detectEthereumProvider from '@metamask/detect-provider';
import { WalletContext } from './WalletContextProvider';
import { Web3Context } from '../context/Web3ContextProvider';

const MetamaskContext = createContext();

function MetamaskProvider({children}) {

	const [ provider, setProvider ] = useState();
	const { setWalletAddress, getWalletAddress, getConnectedStatus } = useContext(WalletContext);
	const { setWeb3 } = useContext(Web3Context);

	const { checkProvider, connectToMetamask, setHandleAccountsChanged, setHandleChainChanged, removeAccountsChanged,
		removeChainChanged } = Metamask();

	useEffect(() => {
		if (provider) {
			setWeb3(provider);
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

	const connectToMetamaskAndSetBasicFunc = async (providerNotDetected, providerNotEthereum, handleAccountChanged, handleConnectFailure, handleChainChanged) => {
		const validProvider = checkProvider(providerNotDetected, providerNotEthereum, provider);

		const cbHandleConnectFailure = (error) => {
			handleConnectFailure(error);
		}

		const cbHandleAccountChanged = (account) => {
			setWalletAddress(account[0]);
			handleAccountChanged(account[0]);
		}

		const cbHandleChainChanged = (chain) => {
			handleChainChanged(chain);
		}

		if (validProvider) {
			await connectToMetamask(cbHandleAccountChanged, cbHandleConnectFailure);
			setHandleAccountsChanged(cbHandleAccountChanged);
			setHandleChainChanged(cbHandleChainChanged);
		}

		return getConnectedStatus();
	}

	const disconnectFromMetamask = () => {
		setWalletAddress(null);
	}

	const getProvider = () => {
		return provider;
	}
	
	return (
		<MetamaskContext.Provider value={{ getProvider, connectToMetamaskAndSetBasicFunc, disconnectFromMetamask }}>
			{children}
		</MetamaskContext.Provider>
	);
}

export {
	MetamaskContext,
	MetamaskProvider,
}