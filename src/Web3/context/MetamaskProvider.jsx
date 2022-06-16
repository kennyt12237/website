import React, {
  useState,
  createContext,
  useEffect,
  useContext,
} from "react";
import Metamask from "../MetamaskAPI/Metamask";
import detectEthereumProvider from "@metamask/detect-provider";
import { WalletContext } from "./WalletContextProvider";
import { Web3Context } from "../context/Web3ContextProvider";
import { checkSupportedChain } from "../ChainList/chainList";

const MetamaskContext = createContext();

/*
    Maintains a global state of all callback functions and providers that links with the Metamask API
*/
function MetamaskProvider({ children }) {
  const [provider, setProvider] = useState();
  const [onAccountConnectedSuccess, setOnAccountConnectedSuccess] = useState(
    () => () => alert("Successfully Connected")
  );
  const [onAccountConnectedFailure, setOnAccountConnectedFailure] = useState(
    () => () => alert("Failed to Connected")
  );
  const [onAccountChanged, setOnAccountsChanged] = useState(
    () => () => alert("Changed to another account")
  );
  const [onChainChanged, setOnChainChanged] = useState(
    () => () => alert("Switched to another change")
  );
  const [onProviderNotDetected, setOnProviderNotDetected] = useState(
    () => () => alert("Provider not detected")
  );
  const [onEthereumNotDetected, setOnEthereumNotDetected] = useState(
    () => () => alert("Ethereum dot detected")
  );

  const [chainId, setChainId] = useState();
  const [validNetwork, setValidNetwork] = useState();
  const { setWalletAddress } = useContext(WalletContext);
  const { setWeb3 } = useContext(Web3Context);

  const onAccountChangedWrapper = (account) => {
    setWalletAddress(account[0]);
    onAccountChanged(account);
  };

  const onAccountConnectedSuccessWrapper = (account) => {
    setWalletAddress(account[0]);
    onAccountConnectedSuccess(account);
  };

  const onAccountConnectedFailureWrapper = (message) => {
    onAccountConnectedFailure(message);
  };

  const onChainChangedWrapper = (chainId) => {
    setChainId(chainId);
    onChainChanged(chainId);
  };

  const onProviderNotDetectedWrapper = (error) => {
    onProviderNotDetected(error);
  };

  const onEthereumNotDetectedWrapper = (error) => {
    onEthereumNotDetected(error);
  };

  const {
    getChainIdEthereum,
    checkProvider,
    connectAndRequestToMetamask,
    setHandleAccountsChanged,
    setHandleChainChanged,
    removeAccountsChanged,
    removeChainChanged,
    switchChain,
  } = Metamask();

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
    };
    EthProvider();
  }, []);

  useEffect(() => {
    if (checkSupportedChain(chainId)) {
      setValidNetwork(true);
    } else {
      setValidNetwork(false);
    }
  }, [chainId]);

  const connectToMetamask = async () => {
    const validProvider = checkProvider(
      onProviderNotDetectedWrapper,
      onEthereumNotDetectedWrapper,
      provider
    );

    if (validProvider) {
      setChainId(await getChainIdEthereum());
      await connectAndRequestToMetamask(
        onAccountConnectedSuccessWrapper,
        onAccountConnectedFailureWrapper
      );
      setHandleAccountsChanged(onAccountChangedWrapper);
      setHandleChainChanged(onChainChangedWrapper);
      return true;
    }
    return false;
  };

  const disconnectFromMetamask = () => {
    setWalletAddress(null);
    removeAccountsChanged(onAccountChangedWrapper);
    removeChainChanged(onChainChangedWrapper);
  };

  const switchNetwork = (network, pendingMessage) => {
    switchChain(network, pendingMessage);
  };

  const getProvider = () => {
    return provider;
  };

  const getChainId = () => {
    return chainId;
  };

  const getValidNetwork = () => {
    return validNetwork;
  };

  return (
    <MetamaskContext.Provider
      value={{
        getProvider,
        getChainId,
        getValidNetwork,
        setOnAccountsChanged,
        setOnAccountConnectedSuccess,
        setOnAccountConnectedFailure,
        setOnChainChanged,
        setOnProviderNotDetected,
        setOnEthereumNotDetected,
        connectToMetamask,
        disconnectFromMetamask,
        switchNetwork,
      }}
    >
      {children}
    </MetamaskContext.Provider>
  );
}

export { MetamaskContext, MetamaskProvider };
