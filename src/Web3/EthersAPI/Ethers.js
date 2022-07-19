import { ethers } from "ethers";

function Ethers() {
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

const parseByte32ToString = (text) => {
  return ethers.utils.parseBytes32String(text);
};

const parseBigNumberToString = (text) => {
  return text.toString();
};

export { Ethers, parseByte32ToString, parseBigNumberToString };
