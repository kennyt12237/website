import React from "react";
import { WalletContextProvider } from "../context/WalletContextProvider";

export function WithWalletContextProvider(props) {
  const { children } = props;

  return <WalletContextProvider>{children}</WalletContextProvider>;
}
