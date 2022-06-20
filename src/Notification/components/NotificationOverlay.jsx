import { useContext, useMemo } from "react";
import ReactDOM from "react-dom";
import { NotificationContext } from "../context/NotificationContextProvider";

export function NotificationOverlay(props) {
  const { id } = props;
  const { getNotificationAlert } = useContext(NotificationContext);

  const documentElement = useMemo(() => document.getElementById(id), []);

  return ReactDOM.createPortal(getNotificationAlert(), documentElement);
}
