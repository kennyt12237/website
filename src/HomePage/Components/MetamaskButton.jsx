import React, { useContext } from 'react';
import { MetamaskContext } from '../../Web3/context/MetamaskProvider';
import { WalletContext } from '../../Web3/context/WalletContextProvider';

export default function MetamaskButton(props) {

	const { connectToMetamaskAndSetBasicFunc, disconnectFromMetamask } = useContext(MetamaskContext);
	const { getWalletAddress, getConnectedStatus } = useContext(WalletContext);

	const providerNotDetected = (result) => {
		console.log(result);
		alert("No Provider detected")
	};
	const providerNotEthereum = (result) => {
		console.log(result);
		alert("Provider is not Ethereum");
	};

	const handleAccountChanged = (account) => {
		console.log("Account connected or changed");
	};

	const handleAccountFailed = (error) => {
		console.log(error);
		alert("Account failed to connect");
	};

	const handleChainChanged = (chain) => {
		console.log(chain);
		alert("Switched chain to " + chain);
	};

	const handleMetamaskButtonClicked = () => {
		connectToMetamaskAndSetBasicFunc(providerNotDetected, providerNotEthereum, handleAccountChanged, handleAccountFailed, handleChainChanged);
	}

	const handleDisconnectButtonClicked = () => {
		disconnectFromMetamask();
		console.log("Disconnected");
	}


	return (
		<div>
			{ getConnectedStatus() ? (
			<div className='wallet-container' onClick={() => handleDisconnectButtonClicked()} >
				<img className="wallet-container__image" src="metamask.png" alt="Metamask Logo" />
 				<p> Disconnect </p> 
			</div>)
			: (
				<div className='wallet-container' onClick={() => handleMetamaskButtonClicked()} >
					<img className="wallet-container__image" src="metamask.png" alt="Metamask Logo" />
					 <p> Connect Wallet </p> 
				</div>) 
				}
		</div>
	)
}