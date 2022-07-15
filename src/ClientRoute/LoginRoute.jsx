import React, { useContext, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { WalletContext } from "../ContextProvider";
export default function LoginRoute() {
  const { walletProvider } = useContext(WalletContext);

  const isConnected = useMemo(() => {
    console.log(walletProvider);
    if (walletProvider && walletProvider._addresses) {
      return true;
    }
    return false;
  }, [walletProvider]);
  return isConnected ? <Outlet /> : <Navigate to="/website" />;
}
