import React from "react";
import { Web3ContextProvider } from "../context/Web3ContextProvider";

export function WithWeb3ContextProvider(props) {
  const { children } = props;

  return <Web3ContextProvider>{children}</Web3ContextProvider>;
}
