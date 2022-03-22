import React, { useContext, useEffect } from 'react';
import  ReactDOM  from 'react-dom';
import '../scss/NotificationAlert.scss'
import { NotificationContext } from '../context/NotificationContextProvider';

export default function NotificationAlert(props) {

    const { timer } = props;
    const { getIsVisible, setTimer, getMessage } = useContext(NotificationContext);

    useEffect(() => {
        setTimer(timer);
    },[])

    return (
        getIsVisible() && ReactDOM.createPortal(
            <div className='notification-container'>
                <p> {getMessage()} </p>
            </div>, document.getElementById('notification-root')
        )
    )
}