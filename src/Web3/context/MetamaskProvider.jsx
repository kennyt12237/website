import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useCallback,
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

  const onAccountChangedCB = useCallback(
    (account) => {
      setWalletAddress(account[0]);
      onAccountChanged(account);
    },
    [onAccountChanged]
  );

  const onAccountConnectedSuccessCB = useCallback(
    (account) => {
      setWalletAddress(account[0]);
      onAccountConnectedSuccess(account);
    },
    [onAccountConnectedSuccess]
  );

  const onAccountConnectedFailureCB = useCallback(
    (message) => {
      onAccountConnectedFailure(message);
    },
    [onAccountConnectedFailure]
  );

  const onChainChangedCB = useCallback(
    (chainId) => {
      setChainId(chainId);
      onChainChanged(chainId);
    },
    [onChainChanged]
  );

  const onProviderNotDetectedCB = useCallback(
    (error) => {
      onProviderNotDetected(error);
    },
    [onProviderNotDetected]
  );

  const onEthereumNotDetectedCB = useCallback(
    (error) => {
      onEthereumNotDetected(error);
    },
    [onEthereumNotDetected]
  );

  const {
    getChainIdEthereum,
    checkProvider,
    connectAndRequestToMetamask,
    setHandleAccountsChanged,
    setHandleChainChanged,
    removeAccountsChanged,
    removeChainChanged,
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
      onProviderNotDetectedCB,
      onEthereumNotDetectedCB,
      provider
    );

    if (validProvider) {
      setChainId(await getChainIdEthereum());
      await connectAndRequestToMetamask(
        onAccountConnectedSuccessCB,
        onAccountConnectedFailureCB
      );
      setHandleAccountsChanged(onAccountChangedCB);
      setHandleChainChanged(onChainChangedCB);
      return true;
    }
    return false;
  };

  const disconnectFromMetamask = () => {
    setWalletAddress(null);
    removeAccountsChanged(onAccountChangedCB);
    removeChainChanged(onChainChangedCB);
  };

  const getProvider = () => {
    return provider;
  };

  const getChainId = () => {
    return chainId;
  };

  const getValidNetwork = () => {
      return validNetwork;
  }

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
      }}
    >
      {children}
    </MetamaskContext.Provider>
  );
}

export { MetamaskContext, MetamaskProvider };
