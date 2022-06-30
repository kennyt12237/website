import React from "react";
import { Outlet } from "react-router-dom";
import UnsupportedNetwork from "../HomePage/Components/UnsupportedNetwork";

export default function ChainRoute() {

  return false ? <Outlet /> : <UnsupportedNetwork />;
}
