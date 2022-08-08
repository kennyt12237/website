import React, { createContext, useEffect, useState } from "react";
import { Notification } from "../components/Notification";

const NotificationContext: React.Context<any> = createContext<any>(undefined);

interface Props {
  children: JSX.Element;
}

interface Alert {
  duration: number;
  message: string;
  color: string;
}
function NotificationContextProvider({ children }: Props): JSX.Element {
  const [notificationAlert, setNotificationAlert] = useState<JSX.Element>();
  const [alertRequest, setAlertRequest] = useState<Alert>();
  const [alertNumber, setAlertNumber] = useState<number>(0);

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
