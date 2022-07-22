import { useContext, useMemo } from "react";
import ReactDOM from "react-dom";
import { NotificationContext } from "../context/NotificationContextProvider";

const NOTIFICATION_ID = "notification-root";

export function NotificationOverlay() {
  const { getNotificationAlert } = useContext(NotificationContext);

  const createNotificationElement = () => {
    const element = document.createElement("div");
    element.id(NOTIFICATION_ID);
    document.body.appendChild(element);
  };

  if (!document.getElementById(NOTIFICATION_ID)) {
    createNotificationElement();
  }

  const documentElement = useMemo(() => document.getElementById(NOTIFICATION_ID), []);

  return ReactDOM.createPortal(getNotificationAlert(), documentElement);
}
