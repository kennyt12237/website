import React, { useEffect } from "react";
import { WebsiteWithMetamaskProvider } from "../../Website";
import { websiteContract } from "../../Contracts/websiteContract";
import { selectWalletProvider } from "../../Redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { Web3Modal } from "../../Web3";
import { useState } from "react";

export default function MetamaskButton() {
  const {
    provider,
    handleConnectButtonClicked,
    handleDisconnectButtonClicked,
  } = WebsiteWithMetamaskProvider();
  const navigate = useNavigate();
  const walletProvider = useSelector(selectWalletProvider);
  const [ showModal, setShowModal ] = useState();

  useEffect(() => {
    if (walletProvider.isConnected) {
      const getContract = async () => {
        const ethersProvider = new ethers.providers.Web3Provider(provider);
        const res = new ethers.Contract(
          websiteContract.address,
          websiteContract.abi,
          ethersProvider
        );
        return res;
      };
      const contract = getContract();
      contract.then((res) => console.log(res));
      navigate("/website/projects");
    }
  }, [walletProvider]);

  return (
    <div>
      <Web3Modal showModal={showModal} onModalClose={() => setShowModal(false)}/>
      {walletProvider.isConnected ? (
        <div className="wallet-container" onClick={() => setShowModal(false)}>
          <img
            className="wallet-container__image"
            src={process.env.PUBLIC_URL + "/metamask.png"}
            alt="Metamask Logo"
          />
          <p> Disconnect </p>
        </div>
      ) : (
        <div className="wallet-container" onClick={() => setShowModal(true)}>
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
