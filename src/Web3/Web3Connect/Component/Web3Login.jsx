import React, { useState, useContext } from "react";
import { Web3Context } from "../Context";
import { validProviders, checkValidProvider } from "../Utils/ValidProviders";
import ProviderResource from "../Utils/ProviderResource";
import useWalletProvider from "../Utils/useWalletProvider";
import Web3Button from "./Web3Button";

export default function WalletProviderSelection(props) {
  const { options = null } = props;
  const [provider, setProvider] = useState();
  const { setContextProvider = setProvider } = useContext(Web3Context);

  const providerInstance = useWalletProvider(provider);
  const onProviderSelected = (selectedProvider) => {
    setProvider(selectedProvider);
  };

  const getProvidersEnabled = (options) => {
    if (!options) {
      return validProviders;
    }
    return options.map((provider) => {
      checkValidProvider(provider);
    });
  };

  const providerEnabled = getProvidersEnabled(options);

  return (
    <div>
      {ProviderResource.map((provider) => {
        if (providerEnabled.includes(provider.name)) {
          return (
            <Web3Button
              text={provider.name}
              imageSrc={provider.imageSrc}
              onCustomButtonClick={() => onProviderSelected(provider.name)}
              key={provider}
            />
          );
        }
      })}
    </div>
  );
}
