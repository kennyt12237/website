import React, {createContext, useState } from 'react';

const WalletContext = createContext();

function WalletContextProvider({children}) {

	const [walletAddress, setWalletAddress] = useState();
	
	return (
		<WalletContext.Provider value={{walletAddress, setWalletAddress}}>
			{children}
		</WalletContext.Provider>
	);
};

export {
	WalletContext,
	WalletContextProvider
};