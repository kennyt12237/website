import React, { useContext, useEffect } from 'react';
import  ReactDOM  from 'react-dom';
import '../scss/NotificationAlert.scss'
import { NotificationContext } from '../context/NotificationContextProvider';

export default function NotificationAlert(props) {


    const { timer } = props;
    const { getIsVisible, setTimer, getMessage, getColor } = useContext(NotificationContext);

    useEffect(() => {
        setTimer(timer);
    },[])

    return (
        getIsVisible() && ReactDOM.createPortal(
            <div className='notification-container' style={{'backgroundColor' : `${getColor()}`}}>
                <p className='notification-container--message'> {getMessage()} </p>
            </div>, document.getElementById('notification-root')
        )
    )
}