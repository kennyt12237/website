import React, { useContext, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { WalletContext } from "../Web3";
export default function LoginRoute() {
  const { getAddresses } = useContext(WalletContext);

  const isConnected = useMemo(() => {
    console.log(getAddresses())
    if (getAddresses()) {
      return true;
    }
    return false;
  }, [getAddresses]);

  return isConnected ? <Outlet /> : <Navigate to="/website" />;
}
