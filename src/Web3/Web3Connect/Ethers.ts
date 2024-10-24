import { useMemo } from "react";
import { Contract, ContractInterface, ethers, InterfaceAbi } from "ethers";

interface Ethers {
    wrappedProviderInstance: any,
    getSmartContract: (contractAddress: string, abi: InterfaceAbi) => Promise<Contract>
    requestAccounts: (provider: any) => any,
}
export default function useEthers(provider?: any): Ethers {
    const wrappedProviderInstance = useMemo(() => {
        if (provider) {
            return new ethers.BrowserProvider(provider);
        }
        return null;
    }, [provider]);

    const getSmartContract = async (contractAddress: string, abi: InterfaceAbi): Promise<Contract> => {
        return new ethers.Contract(contractAddress, abi, provider);
    };

    const requestAccounts = async (provider: any) => {
        return await provider.send("eth_requestAccounts", []);
    };

    return {
        wrappedProviderInstance,
        getSmartContract,
        requestAccounts,
    };
}
