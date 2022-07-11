import React, { useContext } from "react";
import { Web3Context } from "../Context";
import { walletProviderMapper } from "../Utils/walletMapper";
import Web3Button from "./Web3Button";

export default function Web3Login(props) {
  const { options = null } = props;
  const { setProvider } = useContext(Web3Context);

  const walletMapper = walletProviderMapper(options);

  const onProviderSelected = (selectedProvider) => {
    setProvider(selectedProvider);
  };

  return (
    <div>
      {walletMapper.map((provider, index) => {
        if (provider.provider) {
          return (
            <Web3Button
              text={provider.name}
              imageSrc={provider.imageSrc}
              onCustomButtonClick={() => onProviderSelected(provider.provider)}
              key={index}
            />
          );
        }
      })}
    </div>
  );
}
