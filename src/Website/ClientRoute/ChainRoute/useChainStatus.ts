import { useState, useEffect, useContext } from "react";
import { chainList } from "./ChainList";
import { WalletContext } from "../../../Web3";

interface ChainStatus {
    validChainId: Boolean,
    chainInText: String,
}
export default function useChainStatus(): ChainStatus {
    const [validChainId, setValidChainId] = useState<Boolean>(false);
    const [chainInText, setChainInText] = useState<String>("");
    const { getChainId } = useContext(WalletContext);

    const getChainInText = (chainId: string) => {
        const chainToDecimal: number = parseInt(chainId)
        if (chainList[chainToDecimal]) {
            return chainList[chainToDecimal];
        }   
        return "Unfamiliar Network";
    };

    const validChainList = [11155111];

    const checkSupportedChain = (chainId: string) => {
        if (chainId) {
            const chainWithoutHex: number = parseInt(chainId);
            return validChainList.includes(chainWithoutHex);
        }
        return false;
    };

    useEffect(() => {
        if (getChainId()) {
            const chainId = getChainId();
            setChainInText(getChainInText(chainId));
            if (checkSupportedChain(chainId)) {
                setValidChainId(true);
            } else {
                setValidChainId(false);
            }
        }
    }, [getChainId]);

    return {
        validChainId,
        chainInText,
    };
}
