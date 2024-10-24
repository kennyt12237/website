import {BytesLike, ContractInterface, ethers, Eip1193Provider, BrowserProvider, InterfaceAbi, ContractRunner } from "ethers";

function Ethers() {
  const getWrappedProvider  = (provider : Eip1193Provider) : BrowserProvider => {
    return new ethers.BrowserProvider(provider);
  };

  const getContract = (contractAddress : string, contractAbi : InterfaceAbi, providerOrSigner : ContractRunner) => {
    return new ethers.Contract(contractAddress, contractAbi, providerOrSigner);
  };

  return {
    getWrappedProvider,
    getContract,
  };
}

const parseByte32ToString = (text : BytesLike) => {

  return ethers.decodeBytes32String(text);
};

const parseBigNumberToString = (text : BigInt) => {
  return text.toString();
};

export { Ethers, parseByte32ToString, parseBigNumberToString };
