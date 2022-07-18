import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import { chainList } from "./ChainList";
import { WalletContext } from "../../Web3";
import UnsupportedNetwork from "../../HomePage/Components/UnsupportedNetwork";

export default function ChainRoute() {
  const [validChainId, setValidChainId] = useState();
  const [chainInText, setChainInText] = useState();
  const { getChainId } = useContext(WalletContext);

  const getChainInText = (chainId) => {
    const chainWithoutHex = chainId.replace("0x", "");
    if (chainList[chainWithoutHex]) {
      return chainList[chainWithoutHex];
    }
    return "Unfamiliar Network";
  };

  const validChainList = [3];

  const checkSupportedChain = (chainId) => {
    if (chainId) {
      chainId = parseInt(chainId.replace("0x", ""));
      return validChainList.includes(chainId);
    }
    return false;
  };

  useEffect(() => {
    const chainId = getChainId();
    console.log(chainId);
    setChainInText(getChainInText(chainId));
    if (checkSupportedChain(chainId)) {
      setValidChainId(true);
    } else {
      setValidChainId(false);
    }
  }, [getChainId]);
  
  return validChainId ? (
    <Outlet />
  ) : (
    <UnsupportedNetwork chainInText={chainInText} />
  );
}
