import React, { useContext } from 'react';
import { MetamaskContext } from '../../Web3/context/MetamaskProvider';

export default function MetamaskButton(props) {

	const { connectToMetamaskAndSetBasicFunc } = useContext(MetamaskContext);

	const providerNotDetected = () => {
		alert("No Provider detected")
	};
	const providerNotEthereum = () => {
		alert("Provider is not Ethereum");
	};

	const handleAccountChanged = () => {
		alert("Account changed");
		window.location.reload();
	};

	const handleAccountFailed = () => {
		alert("Account failed to connect");
	};

	const handleChainChanged = () => {
		alert("Switched to chain");
	};

	return (
		<div className='wallet-container' onClick={() => connectToMetamaskAndSetBasicFunc(providerNotDetected, providerNotEthereum, handleAccountChanged, handleAccountFailed, handleChainChanged)} >
			<img className="wallet-container__image" src="metamask.png" alt="Metamask Logo" />
			<p> Connect Wallet </p>
		</div>
	)
}