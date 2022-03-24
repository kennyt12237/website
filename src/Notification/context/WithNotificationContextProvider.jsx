import React from "react";
import { NotificationContextProvider } from "./NotificationContextProvider";

export default function WithNotificationContextProvider(props) {
  const { children } = props;

  return <NotificationContextProvider>{children}</NotificationContextProvider>;
}
