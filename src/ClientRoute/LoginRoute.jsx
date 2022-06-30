import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectWalletProvider } from "../Redux";

export default function LoginRoute() {
  const walletProvider = useSelector(selectWalletProvider);

  const isConnected = useMemo(() => {
    if (walletProvider && walletProvider.address) {
        return true;
    }
    return false;
  }, [walletProvider]);
  return isConnected ? <Outlet /> : <Navigate to="/website" />;
}
