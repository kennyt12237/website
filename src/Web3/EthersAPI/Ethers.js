import { ethers } from "ethers";

export default function Ethers() {
  const getWrappedProvider = (provider) => {
    return new ethers.providers.Web3Provider(provider);
  };

  const getContract = (contractAddress, contractAbi, wrappedProvider) => {
    return new ethers.Contract(contractAddress, contractAbi, wrappedProvider);
  };

  return {
    getWrappedProvider,
    getContract,
  };
}
