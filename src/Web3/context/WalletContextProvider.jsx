import React, { useState, createContext, useEffect } from 'react';

const WalletContext = createContext();

function WalletContextProvider(props) {

	const { children } = props;

	const [ walletAddr, setWalletAddr ] = useState();
	const [ walletConnected, setWalletConnected ] = useState(false);
	
	const setWalletAddress = (address) => {
		setWalletAddr(address);
	}

	const clearWalletAddress = () => {
		setWalletAddr(0);
	}

	const getWalletAddress = () => {
		return walletAddr;
	}

	const getConnectedStatus = () => {
		return walletConnected;
	}

	useEffect(() => {
		if (walletAddr) {
			setWalletConnected(true);
		} else {
			setWalletConnected(false);
		}
	}, [walletAddr])

	return (
		<WalletContext.Provider value={{ setWalletAddress, clearWalletAddress, getWalletAddress, getConnectedStatus }} >
			{ children }
		</WalletContext.Provider>
	)
}

export {
	WalletContext,
	WalletContextProvider
}