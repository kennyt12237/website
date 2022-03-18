import React from 'react';
import { WalletContextProvider } from '../context/WalletContextProvider';

export default function WithWalletContextProvider(props) {

	const { children } = props;

	return (
		<WalletContextProvider>
			{ children }
		</WalletContextProvider>
	)
}