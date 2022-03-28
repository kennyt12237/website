import { useContext, useEffect } from 'react';
import { Web3Context } from '../context/Web3ContextProvider';

export default function useSmartContract(contracts) {

    const { getWeb3, getSmartContract, setSmartContract } = useContext(Web3Context);

    useEffect(() => {
        const web3 = getWeb3();
        if (contracts) {
            const allContracts = [];
			contracts.forEach(contract => {
				allContracts.push(new web3.eth.Contract(contract.abi, contract.address));
			});
			setSmartContract(allContracts);
        }
    }, [])

    return getSmartContract();
}