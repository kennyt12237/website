import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContextProvider";
import Notification from "../components/Notification";

export default function useNotification() {

  const COLOR_GREEN = "green";
  const COLOR_RED = "#f04444";

  const { setNotificationAlert, getAlertNumber } = useContext(NotificationContext);

  const successAlert = (message, duration = 8000) => {
    setNotificationAlert(
      <Notification
        duration={duration}
        message={message}
        color={COLOR_GREEN}
        key={getAlertNumber()}
      />
    );
  };

  const failedAlert = (message, duration = 8000) => {
    setNotificationAlert(
      <Notification
        duration={duration}
        message={message}
        color={COLOR_RED}
        key={getAlertNumber()}
      />
    );
  };

  return {
    successAlert,
    failedAlert,
  };
}
