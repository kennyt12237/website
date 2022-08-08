import React from "react";
import { Outlet } from "react-router-dom";
import { UnsupportedNetwork } from "../../LandingPage";

interface Props {
  validChainId: Boolean;
  chainInText: String;
}
export default function ChainRoute({
  validChainId,
  chainInText,
}: Props): JSX.Element {
  return validChainId ? (
    <Outlet />
  ) : (
    <UnsupportedNetwork chainInText={chainInText} />
  );
}
