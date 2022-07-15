import React from "react";
import { useNavigate } from "react-router-dom";
import { Web3Modal } from "../../Web3";
import { useState } from "react";

export default function WalletButton(props) {
  const { src } = props;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState();
  const [provider, setProvider] = useState();

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
