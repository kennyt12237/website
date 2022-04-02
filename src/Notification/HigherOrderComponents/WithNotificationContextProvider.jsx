import React from "react";
import { NotificationContextProvider } from "../context/NotificationContextProvider";

export function WithNotificationContextProvider(props) {
  const { children } = props;

  return <NotificationContextProvider>{children}</NotificationContextProvider>;
}
