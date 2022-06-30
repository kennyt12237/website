import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectWalletProvider } from "../Redux";

export default function LoginRoute() {
  const isConnected = useSelector(selectWalletProvider);

  return isConnected ? <Outlet /> : <Navigate to="/website" />;
}
