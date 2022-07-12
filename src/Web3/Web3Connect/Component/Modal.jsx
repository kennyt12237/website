import React from "react";
import { useCallback } from "react";
import { walletProviderMapper } from "../Utils/walletMapper";
import Web3Button from "./Web3Button";

export default function Modal(props) {
  const { showModal, onModalClose, options } = props;

  const walletMapper = walletProviderMapper(options);

  const getVisibility = useCallback(() => {
    if (showModal) {
      return {
        display: "block",
      };
    }
    return {
      display: "none",
    };
  }, [showModal]);

  return (
    <div style={getVisibility()}>
      {walletMapper.map((provider, index) => {
        if (provider.provider) {
          return (
            <Web3Button
              text={provider.name}
              imageSrc={provider.imageSrc}
              onCustomButtonClick={() => console.log(provider.provider)}
              key={index}
            />
          );
        }
      })}
    </div>
  );
}
