import React from "react";
import { Outlet } from "react-router-dom";
import UnsupportedNetwork from "../../HomePage/Components/UnsupportedNetwork";

export default function ChainRoute(props) {
  const { validChainId, chainInText } = props;

  return validChainId ? (
    <Outlet />
  ) : (
    <UnsupportedNetwork chainInText={chainInText} />
  );
}
