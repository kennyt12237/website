import { useContext, useEffect, useState } from "react";
import { Web3Context } from "../context/Web3ContextProvider";

export default function useSmartContract(contract) {
  const { getWeb3 } = useContext(Web3Context);
  const [smartContract, setSmartContract] = useState();

  useEffect(() => {
    const web3 = getWeb3();
    if (contract) {
      setSmartContract(new web3.eth.Contract(contract.abi, contract.address));
    }
  }, [getWeb3]);

  return smartContract;
}
