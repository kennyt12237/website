import React, { useState, createContext, useEffect, useContext } from 'react';
import Metamask from '../MetamaskAPI/Metamask';
import detectEthereumProvider from '@metamask/detect-provider';
import { WalletContext } from '../context/WalletCoxtentProvider';
import { Web3Context } from '../context/Web3ContextProvider';

const MetamaskContext = createContext();

function MetamaskProvider({children}) {

	const [ provider, setProvider ] = useState();
	const { setWalletAddress, clearWalletAddress, getWalletAddress } = useContext(WalletContext);
	const { setWeb3, getWeb3 } = useContext(Web3Context);

	const { checkProvider, connectToMetamask, setHandleAccountsChanged, setHandleChainChanged } = Metamask();

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

	const connectToMetamaskAndSetBasicFunc = async (alertProviderNotDetected, alertProviderNotEthereum, alertAccountChanged, alertHandleConnectFailure, alertHandleChainChanged) => {
		const validProvider = checkProvider(alertProviderNotDetected, alertProviderNotEthereum, provider);

		const handleWalletConnected = address => {
			setWalletAddress(address);
		}

		if (validProvider) {
			await connectToMetamask(handleWalletConnected, alertHandleConnectFailure);
			setHandleAccountsChanged(alertAccountChanged);
			setHandleChainChanged(alertHandleChainChanged);
		}

		console.log(getWalletAddress());
		console.log(provider);
		console.log(getWeb3());
		return true;
	}

	const getProvider = () => {
		return provider;
	}
	
	return (
		<MetamaskContext.Provider value={{ getProvider, connectToMetamaskAndSetBasicFunc }}>
			{children}
		</MetamaskContext.Provider>
	);
}

export {
	MetamaskContext,
	MetamaskProvider,
}