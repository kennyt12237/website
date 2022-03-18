import React from 'react';
import { MetamaskProvider } from '../context/MetamaskProvider';

export default function MetamaskHOC({children}) {

	return (
		<MetamaskProvider>
			{children}
		</MetamaskProvider>
	)
}