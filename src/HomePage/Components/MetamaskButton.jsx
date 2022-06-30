import React, { useEffect } from "react";
import { WebsiteWithMetamaskProvider } from "../../Website";
import { selectWalletProvider } from '../../Redux';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MetamaskButton() {
  const { handleConnectButtonClicked, handleDisconnectButtonClicked } =
    WebsiteWithMetamaskProvider();
  const navigate = useNavigate();
  const walletProvider = useSelector(selectWalletProvider);

  useEffect(() => {
    if (walletProvider.isConnected) {
      navigate("/website/projects");
    }
  }, [walletProvider]);

  return (
    <div>
      {walletProvider.isConnected ? (
        <div
          className="wallet-container"
          onClick={() => handleDisconnectButtonClicked()}
        >
          <img
            className="wallet-container__image"
            src={process.env.PUBLIC_URL + "/metamask.png"}
            alt="Metamask Logo"
          />
          <p> Disconnect </p>
        </div>
      ) : (
        <div
          className="wallet-container"
          onClick={() => handleConnectButtonClicked()}
        >
          <img
            className="wallet-container__image"
            src="metamask.png"
            alt="Metamask Logo"
          />
          <p> Connect Wallet </p>
        </div>
      )}
    </div>
  );
}
