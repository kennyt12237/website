import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContextProvider";

export function useNotification() {
  const COLOR_GREEN = "green";
  const COLOR_RED = "#f04444";

  const { setAlertRequest } = useContext(NotificationContext);

  const successAlert = (message, duration = 8000) => {
    setAlertRequest({
      duration: duration,
      message: message,
      color: COLOR_GREEN,
    });
  };

  const failedAlert = (message, duration = 8000) => {
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
