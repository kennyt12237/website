import React from "react";
import { Outlet } from "react-router-dom";
import { UnsupportedNetwork } from "../../LandingPage";

export default function ChainRoute(props) {
  const { validChainId, chainInText } = props;

  return validChainId ? (
    <Outlet />
  ) : (
    <UnsupportedNetwork chainInText={chainInText} />
  );
}
