import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { chainList } from "./ChainList";
import UnsupportedNetwork from "../../HomePage/Components/UnsupportedNetwork";
import { selectWalletProviderChain } from "../../Redux";
export default function ChainRoute() {
  const [validChainId, setValidChainId] = useState();
  const [chainInText, setChainInText] = useState();
  const chainId = useSelector(selectWalletProviderChain);

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
    setChainInText(getChainInText(chainId));
    if (checkSupportedChain(chainId)) {
      setValidChainId(true);
    } else {
      setValidChainId(false);
    }
  }, [chainId]);
  return validChainId ? (
    <Outlet />
  ) : (
    <UnsupportedNetwork selectedNetwork={chainId} chainInText={chainInText} />
  );
}
