export default function Metamask() {
	
	const ACCOUNTS_CHANGED = 'accountsChanged';
	const CHAIN_CHANGED = 'chainChanged';

	const ethereum = window.ethereum;

	/*
		A function that checks the provider and returns a boolean value and the 
		appropiate callback functions. 
		There are three parameters:
		- providerIsNull(): called when provider is an empty object.
		- providerNotEthereum(): called when provider is not ethereum.
		- provider: an object representing the provider. 
	*/
	const checkProvider = (providerIsNull, providerNotEthereum, provider) => {
		if (!provider) {
			providerIsNull();
			return false;
		} else if (provider !== ethereum) {
			providerNotEthereum();
			return false;
		}
		return true;
	}

	/*
		A function that calls metamask and requests the user to connect.
		There are two parameters:
		- handleAccountsChanged() : called when the account has been connected/switched.
		- handleAccountFailed(): called when connection failure, passing the error object as an argument.
		- provider: an object representing the provider. 
	*/
	const connectToMetamask = async (handleAccountChanged, handleAccountFailed) => {
		await ethereum.request({ method: 'eth_requestAccounts' }).then(handleAccountChanged).catch((error) => {
			handleAccountFailed(error);
		});
	}

	/*
		A callback function invoked when account has changed
	*/
	const setHandleAccountsChanged = (handleAccountsChanged) => {
		ethereum.on(ACCOUNTS_CHANGED, handleAccountsChanged);
	}

	/*
		A callback function invoked when chain has changed
	*/
	const setHandleChainChanged = (handleChainChanged) => {
		ethereum.on(CHAIN_CHANGED, handleChainChanged);
	}

	return {
		ethereum,
		checkProvider,
		connectToMetamask,
		setHandleAccountsChanged,
		setHandleChainChanged
	}
}