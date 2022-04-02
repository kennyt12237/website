import React, { createContext, useEffect, useState } from "react";
import { Notification } from "../components/Notification";

const NotificationContext = createContext();

function NotificationContextProvider(props) {
  const { children } = props;

  const [notificationAlert, setNotificationAlert] = useState();
  const [alertRequest, setAlertRequest] = useState();
  const [alertNumber, setAlertNumber] = useState(0);

  useEffect(() => {
    if (alertRequest) {
      setNotificationAlert(
        <Notification
          duration={alertRequest.duration}
          message={alertRequest.message}
          color={alertRequest.color}
          key={alertNumber}
        />
      );
      setAlertNumber(alertNumber + 1);
    }
  }, [alertRequest]);

  const getNotificationAlert = () => {
    return notificationAlert;
  };

  const getAlertNumber = () => {
    return alertNumber;
  };

  return (
    <NotificationContext.Provider
      value={{ getNotificationAlert, setAlertRequest, getAlertNumber }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export { NotificationContext, NotificationContextProvider };
