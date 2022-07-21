import React, { useState, useEffect, useContext } from "react";
import { WalletContext } from "../Web3";

export default function useLoginStatus() {

    const [ isConnected, setIsConnected ] = useState();
    const { getAddresses } = useContext(WalletContext);

    useEffect(() => {
        if (getAddresses()) {
            setIsConnected(true);
        } else {
            setIsConnected(false);
        }
    }, [getAddresses])

    return {
        isConnected
    }
}