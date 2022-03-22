import React, { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext();

function NotificationContextProvider(props) {

    const { children } = props;
    const [ isVisible, setIsVisible ] = useState(false);
    const [ message, setMessage ] = useState();
    const [ timer, setTimer ] = useState();

    useEffect(() => {
        if (isVisible) {
            const start = setTimeout(() => {
                setIsVisible(false)
            }
            ,timer);
            return () => clearTimeout(start); 
        }
    }, [isVisible])

    const getIsVisible = () => {
        return isVisible;
    }

    const getMessage = () => {
        return message;
    }

    return (
        <NotificationContext.Provider value={{setIsVisible, getIsVisible, setMessage, getMessage, setTimer}}>
            { children }
        </NotificationContext.Provider>
    )
}

export {
    NotificationContext,
    NotificationContextProvider
}