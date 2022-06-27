import { useNotification } from "../../Notification";
import { setWalletProvider, removeWalletProvider } from "../../Redux";
import { MetamaskHelper } from "../../Web3";
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
  } = MetamaskHelper();

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
    if (isConnected) {
      setWalletProvider({ provider: "metamask" });
    }
    failedAlert("Failed to Connect");
  };

  const handleDisconnectButtonClicked = () => {
    disconnectFromMetamask();
    removeWalletProvider({});
    successAlert(ACCOUNT_DISCONNECTED);
  };

  setOnProviderNotDetected(() => providerNotDetected);
  setOnEthereumNotDetected(() => providerNotEthereum);
  setOnAccountsChanged(() => handleAccountChanged);
  setOnAccountConnectedSuccess(() => handleSuccessConnection);
  setOnAccountConnectedFailure(() => handleFailedConnection);
  setOnChainChanged(() => handleChainChanged);

  return { handleConnectButtonClicked, handleDisconnectButtonClicked };
}
