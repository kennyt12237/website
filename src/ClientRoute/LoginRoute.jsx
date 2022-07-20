import React, { useContext, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { WalletContext } from "../Web3";
import { useNotification } from "../Notification";

export default function LoginRoute() {
  const { getAddresses } = useContext(WalletContext);
  const { successAlert, failedAlert } = useNotification();
  
  const isConnected = useMemo(() => {
    if (getAddresses()) {
      successAlert("Connected Successfully")
      return true;
    }
    return false;
  }, [getAddresses]);

  return isConnected ? <Outlet /> : <Navigate to="/website" />;
}
