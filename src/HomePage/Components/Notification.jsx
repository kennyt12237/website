import React, { useContext, useEffect } from 'react';
import '../scss/NotificationAlert.scss'
import { NotificationContext } from '../context/NotificationContextProvider';

export default function Notification(props) {

    const { color, message } = props;

    useEffect(() => {
        console.log("Just Created")
    },[])

    return (
        <div className='notification-container' style={{'backgroundColor' : `${color}`}}>
            <p className='notification-container--message'> {message} </p>
        </div>
    )
}