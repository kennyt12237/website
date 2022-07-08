import React, { useEffect } from "react";
import { WebsiteWithMetamaskProvider } from "../../Website";
import WebsiteAPI from "../../Contracts/WebsiteAPI";
import { websiteContract } from "../../Contracts/websiteContract";
import { selectWalletProvider } from "../../Redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

export default function MetamaskButton() {
  const {
    provider,
    handleConnectButtonClicked,
    handleDisconnectButtonClicked,
  } = WebsiteWithMetamaskProvider();
  const navigate = useNavigate();
  const walletProvider = useSelector(selectWalletProvider);

  useEffect(() => {
    if (walletProvider.isConnected) {
      const getContract = async () => {
        const ethersProvider = new ethers.providers.Web3Provider(provider)
        const res = new ethers.Contract(websiteContract.address, websiteContract.abi, ethersProvider);
        return res;
      };
      const contract = getContract();
      contract.then((res) => console.log(res));
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
