import { BigNumber, Bytes, ContractInterface, ethers, providers } from "ethers";

function Ethers() {
  const getWrappedProvider  = (provider : providers.ExternalProvider) : providers.Web3Provider => {
    return new ethers.providers.Web3Provider(provider);
  };

  const getContract = (contractAddress : string, contractAbi : ContractInterface, providerOrSigner : providers.Provider | ethers.Signer) => {
    return new ethers.Contract(contractAddress, contractAbi, providerOrSigner);
  };

  return {
    getWrappedProvider,
    getContract,
  };
}

const parseByte32ToString = (text : Bytes) => {
  return ethers.utils.parseBytes32String(text);
};

const parseBigNumberToString = (text : BigNumber) => {
  return text.toString();
};

export { Ethers, parseByte32ToString, parseBigNumberToString };
