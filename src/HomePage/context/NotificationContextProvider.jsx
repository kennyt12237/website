import React, { createContext, useEffect, useState } from 'react';
import Notification from '../Components/Notification';
const NotificationContext = createContext();

function NotificationContextProvider(props) {

	const COLOR_GREEN = 'green';
	const COLOR_RED = 'red';

    const { children } = props;

    const [ notificationAlert, setNotificationAlert ] = useState();
	const [ alertNum, setAlertNum ] = useState(0);

	useEffect(() => {
		setAlertNum(alertNum + 1);
	},[notificationAlert]);

	const successAlert = (message) => {
		setNotificationAlert(<Notification message={message} color={COLOR_GREEN} key={alertNum}/>)
	}

	const failedAlert = (message) => {
		setNotificationAlert(<Notification message={message} color={COLOR_RED} key={alertNum}/>)
	}

	const getNotificationAlert = () => {
		return notificationAlert;
	}

    return (
        <NotificationContext.Provider value={{ getNotificationAlert, setNotificationAlert, successAlert, failedAlert}}>
            { children }
        </NotificationContext.Provider>
    )
}

export {
    NotificationContext,
    NotificationContextProvider
}