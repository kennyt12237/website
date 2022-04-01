import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { MetamaskContext } from "../Web3/context/MetamaskProvider";
import UnsupportedNetwork from "../HomePage/Components/UnsupportedNetwork";

export default function ChainRoute() {
  const { getValidNetwork } = useContext(MetamaskContext);

  return getValidNetwork() ? <Outlet /> : <UnsupportedNetwork />;
}
