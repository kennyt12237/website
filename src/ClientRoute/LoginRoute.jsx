import React, { useEffect } from "react";
import { useRef } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useNotification } from "../Notification";

export default function LoginRoute(props) {
  const { isConnected } = props;
  const initalConnection = useRef();
  const { successAlert, failedAlert } = useNotification();

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
