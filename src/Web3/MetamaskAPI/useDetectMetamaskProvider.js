import { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

/*
	A function to detect the Ethereum provider.
*/
export default function useDetectEthereumProvider() {

	const [provider, setProvider] = useState();

	useEffect(() => {
		const prov = async () => {
			await detectEthereumProvider().then((response) => {
				setProvider(response);
			 });
		}
		prov();
	})

	return provider;
}
