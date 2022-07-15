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

  const providerPromise = (provider) =>
    new Promise(async (resolve, reject) => {
      if (!provider) {
        reject("No Provider Selected");
      }
      try {
        await provider.request({ method: "eth_requestAccounts" });
        resolve(provider);
      } catch (error) {
        reject(error);
      }
    });

  return (
    <div
      className="modal-background"
      style={getVisibility()}
      onClick={() => onModalClose(providerPromise(null))}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-container--text-size">Connect Wallet</div>
        <div className="modal-container__buttons">
          {walletMapper.map((provider, index) => {
            if (provider.provider) {
              return (
                <Web3Button
                  text={provider.name}
                  imageSrc={require(`../Assets/${provider.imageSrc}`)}
                  onCustomButtonClick={() =>
                    onModalClose(providerPromise(provider.provider))
                  }
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
