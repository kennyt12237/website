import { useState, useEffect, useContext } from "react";
import { WalletContext } from "../../../Web3";

interface LoginStatus {
    isConnected : Boolean
}
export default function useLoginStatus() : LoginStatus {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const { getAddresses } = useContext(WalletContext);

  useEffect(() => {
    if (getAddresses()) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [getAddresses]);

  return {
    isConnected,
  };
}
