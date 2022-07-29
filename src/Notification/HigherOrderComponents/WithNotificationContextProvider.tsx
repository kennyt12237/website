import React from "react";
import { NotificationContextProvider } from "../context/NotificationContextProvider";

interface Props {
  children: JSX.Element;
}
export function WithNotificationContextProvider({
  children,
}: Props): JSX.Element {
  return <NotificationContextProvider>{children}</NotificationContextProvider>;
}
