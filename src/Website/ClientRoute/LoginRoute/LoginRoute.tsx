import React, { useEffect } from "react";
import { useRef } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useNotification } from "../../../Notification";

interface Props {
  isConnected: Boolean;
}
export default function LoginRoute({ isConnected }: Props): JSX.Element {
  const initalConnection = useRef<Boolean>(false);
  const { successAlert } = useNotification();

  useEffect(() => {
    if (isConnected) {
      initalConnection.current = true;
      successAlert("Connected successfully");
    } else if (initalConnection.current) {
      successAlert("Disconnected successfully");
    }
  }, [isConnected]);

  return isConnected ? <Outlet /> : <Navigate to="/website" />;
}
