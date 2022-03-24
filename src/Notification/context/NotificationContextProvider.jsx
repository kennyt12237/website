import React, { createContext, useEffect, useState } from "react";
import Notification from "../components/Notification";
const NotificationContext = createContext();

function NotificationContextProvider(props) {
  const COLOR_GREEN = "green";
  const COLOR_RED = "#f04444";

  const { children } = props;

  const [notificationAlert, setNotificationAlert] = useState();
  const [alertNum, setAlertNum] = useState(0);

  useEffect(() => {
    setAlertNum(alertNum + 1);
  }, [notificationAlert]);

  const successAlert = (message, duration = 8000) => {
    setNotificationAlert(
      <Notification
        duration={duration}
        message={message}
        color={COLOR_GREEN}
        key={alertNum}
      />
    );
  };

  const failedAlert = (message, duration = 8000) => {
    setNotificationAlert(
      <Notification
        duration={duration}
        message={message}
        color={COLOR_RED}
        key={alertNum}
      />
    );
  };

  const getNotificationAlert = () => {
    return notificationAlert;
  };

  return (
    <NotificationContext.Provider
      value={{
        getNotificationAlert,
        setNotificationAlert,
        successAlert,
        failedAlert,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export { NotificationContext, NotificationContextProvider };
