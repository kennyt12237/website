import React, { useContext, useEffect } from 'react';
import  ReactDOM  from 'react-dom';
import '../scss/NotificationAlert.scss'
import { NotificationContext } from '../context/NotificationContextProvider';

export default function NotificationOverlay() {

    const { getNotificationAlert } = useContext(NotificationContext);

    return (
        ReactDOM.createPortal(getNotificationAlert(), document.getElementById('notification-root'))
    )
}