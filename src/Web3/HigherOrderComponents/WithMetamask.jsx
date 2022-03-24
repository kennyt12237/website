import React from "react";
import { MetamaskProvider } from "../context/MetamaskProvider";
import { WalletContextProvider } from "../context/WalletContextProvider";
import { Web3ContextProvider } from "../context/Web3ContextProvider";

export default function WithMetamask(props) {
  const { children } = props;
  return (
    <WalletContextProvider>
      <Web3ContextProvider>
        <MetamaskProvider>{children}</MetamaskProvider>
      </Web3ContextProvider>
    </WalletContextProvider>
  );
}
