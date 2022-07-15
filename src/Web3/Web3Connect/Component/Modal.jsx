import React from "react";
import { useCallback } from "react";
import { walletProviderMapper } from "../Utils/walletMapper";
import Web3Button from "./Web3Button";
import "./scss/Modal.scss";

export default function Modal(props) {
  const { showModal, onModalClose, options } = props;

  const walletMapper = walletProviderMapper(options);

  const getVisibility = useCallback(() => {
    if (showModal) {
      return {
        display: "flex",
      };
    }
    return {
      display: "none",
    };
  }, [showModal]);

  const providerPromise = (provider) => new Promise(async (resolve, reject) => {
    try {
        await provider.request({ method: "eth_requestAccounts" });
        console.log("Connected")
        resolve(provider);
    } catch (error) {
        console.log("Error")
        reject(error);
    }
  } )

  return (
    <div
      className="modal-background"
      style={getVisibility()}
      onClick={onModalClose}
    >
      <div className="modal-container">
        <div className="modal-container--text-size">Connect Wallet</div>
        <div className="modal-container__buttons">
          {walletMapper.map((provider, index) => {
            if (provider.provider) {
              return (
                <Web3Button
                  text={provider.name}
                  imageSrc={require(`../Assets/${provider.imageSrc}`)}
                  onCustomButtonClick={() => providerPromise(provider.provider)}
                  key={index}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
