import React, { useState, createContext } from 'react';


const WalletContext = createContext();

function WalletContextProvider(props) {

	const { children } = props;

	const [ walletAddr, setWalletAddr ] = useState();
	
	const setWalletAddress = (address) => {
		setWalletAddr(address);
	}

	const clearWalletAddress = () => {
		setWalletAddr(0);
	}

	const getWalletAddress = () => {
		return walletAddr;
	}

	return (
		<WalletContext.Provider value={{ setWalletAddress, clearWalletAddress, getWalletAddress }} >
			{ children }
		</WalletContext.Provider>
	)
}

export {
	WalletContext,
	WalletContextProvider
}