import { useContext, useMemo } from "react";
import ReactDOM from "react-dom";
import { NotificationContext } from "../context/NotificationContextProvider";

const NOTIFICATION_ID : string = "notification-root";

export function NotificationOverlay() : React.ReactPortal {
  const { getNotificationAlert } = useContext(NotificationContext);

  const createNotificationElement = () => {
    const element : HTMLElement = document.createElement("div");
    element.id = NOTIFICATION_ID;
    document.body.appendChild(element);
  };

  if (!document.getElementById(NOTIFICATION_ID)) {
    createNotificationElement();
  }

  const documentElement  = useMemo(() => document.getElementById(NOTIFICATION_ID)!, []);

  return ReactDOM.createPortal(getNotificationAlert(), documentElement);
}
