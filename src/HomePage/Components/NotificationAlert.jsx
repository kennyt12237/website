import React, { useContext, useEffect } from 'react';
import  ReactDOM  from 'react-dom';
import '../scss/NotificationAlert.scss'
import { NotificationContext, NotificationContextProvider } from '../context/NotificationContextProvider';

export default function NotificationAlert(props) {


    const { duration } = props;
    const { getNotificationAlert } = useContext(NotificationContext);

    return (
        ReactDOM.createPortal(getNotificationAlert(), document.getElementById('notification-root'))
    )
}