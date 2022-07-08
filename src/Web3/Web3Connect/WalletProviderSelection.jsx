import React, { useState, useMemo } from "react";
import { validProviders, checkValidProvider } from "./ValidProviders";
import ProviderResource from "./ProviderResource";
import useWalletProvider from "./useWalletProvider";
import Ethers from './Ethers';
import CustomButton from "./CustomButton";

export default function WalletProviderSelection(props) {
  const { options = null } = props;
  const [provider, setProvider] = useState();

  const providerInstance = useWalletProvider(provider);
  const ethers = Ethers(providerInstance);
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
            <CustomButton
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
