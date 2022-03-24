import { useEffect, useState, useContext } from "react";
import { Web3Context } from "../context/Web3ContextProvider";

export default function SmartContract(contracts) {
  const { web3 } = useContext(Web3Context);
  const [contract, setContract] = useState();

  useEffect(() => {
    if (web3) {
      const allContracts = [];
      contracts.forEach((c) => {
        allContracts.push(new web3.eth.Contract(c[0], c[1]));
      });
      setContract(allContracts);
    }
  }, [web3]);

  return contract;
}
