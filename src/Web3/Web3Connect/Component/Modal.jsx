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

  return (
    <div className="modal-background" style={getVisibility()} onClick={onModalClose}>
      <div className="modal-container" >
        {walletMapper.map((provider, index) => {
          if (provider.provider) {
            return (
              <Web3Button
                text={provider.name}
                imageSrc={require(`../Assets/${provider.imageSrc}`)}
                onCustomButtonClick={() => console.log(provider.provider)}
                key={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
