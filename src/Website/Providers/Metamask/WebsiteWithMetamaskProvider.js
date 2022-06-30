import { useEffect } from "react";
import { useNotification } from "../../../Notification";
import { setWalletProvider, removeWalletProvider } from "../../../Redux";
import { MetamaskHelper } from "../../../Web3";
import { useDispatch } from "react-redux";
import {
  INSTALL_METAMASK,
  INVALID_PROVIDER,
  ACCOUNT_CONNECTED,
  ACCOUNT_DISCONNECTED,
  ACCOUNT_CONNECTION_FAILED,
  WALLET_CHANGED_SUCCESS,
} from "./MetamaskMessages";

export default function WebsiteWithMetamaskProvider(props) {
  const { failedAlert, successAlert } = useNotification();
  const dispatch = useDispatch();

  const {
    provider,
    setOnAccountConnectedSuccess,
    setOnAccountConnectedFailure,
    setOnAccountsChanged,
    setOnChainChanged,
    setOnProviderNotDetected,
    setOnEthereumNotDetected,
    connectToMetamask,
    disconnectFromMetamask,
    switchNetwork,
  } = MetamaskHelper(
    (provider) =>
      dispatch(
        setWalletProvider({
          name: "Metamask",
          address: provider.selectedAddress,
          chainId: provider.chainId,
        })
      ),
    () => dispatch(removeWalletProvider())
  );

  const providerNotDetected = () => {
    failedAlert(INSTALL_METAMASK);
  };

  const providerNotEthereum = () => {
    failedAlert(INVALID_PROVIDER);
  };

  const handleAccountChanged = (account) => {
    successAlert(WALLET_CHANGED_SUCCESS);
  };

  const handleSuccessConnection = (account) => {
    successAlert(ACCOUNT_CONNECTED);
  };

  const handleFailedConnection = (error) => {
    failedAlert(ACCOUNT_CONNECTION_FAILED);
  };

  const handleChainChanged = (chain) => {
    successAlert(`Connected to ${chain}`);
  };

  const handleConnectButtonClicked = async () => {
    const isConnected = await connectToMetamask();
    if (!isConnected) {
      failedAlert("Failed to Connect");
    } else {
      successAlert("Connected successfully");
    }
  };

  const handleDisconnectButtonClicked = () => {
    disconnectFromMetamask();
    removeWalletProvider({});
    successAlert(ACCOUNT_DISCONNECTED);
  };

  useEffect(() => {
    setOnProviderNotDetected(() => providerNotDetected);
    setOnEthereumNotDetected(() => providerNotEthereum);
    setOnAccountsChanged(() => handleAccountChanged);
    setOnAccountConnectedSuccess(() => handleSuccessConnection);
    setOnAccountConnectedFailure(() => handleFailedConnection);
    setOnChainChanged(() => handleChainChanged);
  }, []);

  return { handleConnectButtonClicked, handleDisconnectButtonClicked };
}
