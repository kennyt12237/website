import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Web3Modal } from "../../Web3";
import { WalletContext } from "../../Web3";

export default function WalletButton(props) {
  const { src } = props;
  const [showModal, setShowModal] = useState();
  const [provider, setProvider] = useState();
  const navigate = useNavigate();
  const { setWalletProvider } = useContext(WalletContext);
  //   useEffect(() => {
  //     if (walletProvider.isConnected) {
  //       const getContract = async () => {
  //         const ethersProvider = new ethers.providers.Web3Provider(provider);
  //         const res = new ethers.Contract(
  //           websiteContract.address,
  //           websiteContract.abi,
  //           ethersProvider
  //         );
  //         return res;
  //       };
  //       const contract = getContract();
  //       contract.then((res) => console.log(res));
  //       navigate("/website/projects");
  //     }
  //   }, [walletProvider]);

  const onModalClose = (promise) => {
    promise
      .then((result) => {
        setProvider(result);
      })
      .catch((error) => console.log(error));
    setShowModal(false);
  };

  useEffect(() => {
    if (provider) {
      setWalletProvider(provider);
      navigate("/website/projects");
    }
  }, [provider]);

  return (
    <div>
      <Web3Modal showModal={showModal} onModalClose={onModalClose} />
      {provider ? (
        <div className="wallet-container" onClick={() => setProvider(null)}>
          <img
            className="wallet-container__image"
            src={src}
            alt="Wallet Button"
          />
          <p> Disconnect </p>
        </div>
      ) : (
        <div className="wallet-container" onClick={() => setShowModal(true)}>
          <img
            className="wallet-container__image"
            src={src}
            alt="Wallet Button"
          />
          <p> Connect Wallet </p>
        </div>
      )}
    </div>
  );
}
