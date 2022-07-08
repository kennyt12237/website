import { useMemo } from "react";
import { ethers } from "ethers";

export default function useEthers(provider) {
  const wrappedProviderInstance = useMemo(() => {
    if (provider) {
      return new ethers.providers.Web3Provider(provider);
    }
    return null;
  }, [provider]);

  const getSmartContract = async (contractAddress, abi) => {
    return new ethers.Contract(contractAddress, abi, provider);
  };

  const requestAccounts = async (provider) => {
    return await provider.send("eth_requestAccounts", []);
  };
  
  return {
    wrappedProviderInstance,
    getSmartContract,
    requestAccounts,
  };
}
