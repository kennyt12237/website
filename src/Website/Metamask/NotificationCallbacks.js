import { useNotification } from "../../Notification";
import {
  INSTALL_METAMASK,
  INVALID_PROVIDER,
  ACCOUNT_CONNECTED,
  ACCOUNT_DISCONNECTED,
  ACCOUNT_CONNECTION_FAILED,
  WALLET_CHANGED_SUCCESS,
} from "./MetamaskMessages";

const { failedAlert, successAlert } = useNotification();

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

const handleMetamaskButtonClicked = async () => {
  await connectToMetamask();
};

const handleDisconnectButtonClicked = () => {
  disconnectFromMetamask();
  successAlert(ACCOUNT_DISCONNECTED);
};
