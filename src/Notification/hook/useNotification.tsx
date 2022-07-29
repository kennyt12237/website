import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContextProvider";

interface Alert {
  duration: number;
  message: string;
  color: string;
}

export function useNotification() {
  const COLOR_GREEN = "green";
  const COLOR_RED = "#f04444";

  const { setAlertRequest } = useContext(NotificationContext);

  const successAlert = (message: string, duration: number = 8000) => {
    setAlertRequest({
      duration: duration,
      message: message,
      color: COLOR_GREEN,
    });
  };

  const failedAlert = (message: string, duration: number = 8000) => {
    setAlertRequest({
      duration: duration,
      message: message,
      color: COLOR_RED,
    });
  };

  return {
    successAlert,
    failedAlert,
  };
}
