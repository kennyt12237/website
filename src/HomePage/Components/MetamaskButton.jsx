import React from "react";
import { WebsiteWithMetamaskProvider } from "../../Website";
import { useSelector } from "react-redux";
export default function MetamaskButton() {
  const { handleConnectButtonClicked, handleDisconnectButtonClicked } =
    WebsiteWithMetamaskProvider();

  const  { walletProvider } = useSelector((state) => {
    return state.walletProvider;
  });


  return (
    <div>
      {walletProvider ? (
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
