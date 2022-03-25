import React, { createContext, useEffect, useState } from "react";
const NotificationContext = createContext();

function NotificationContextProvider(props) {
  const { children } = props;

  const [notificationAlert, setNotificationAlert] = useState();
  const [alertNumber, setAlertNumber] = useState(0);

  useEffect(() => {
    setAlertNumber(alertNumber + 1);
  }, [notificationAlert]);

  const getNotificationAlert = () => {
    return notificationAlert;
  };

  const getAlertNumber = () => {
    return alertNumber;
  };

  return (
    <NotificationContext.Provider
      value={{ getNotificationAlert, setNotificationAlert, getAlertNumber }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export { NotificationContext, NotificationContextProvider };
