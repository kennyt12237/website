import React, { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext();

function NotificationContextProvider(props) {

    const { children } = props;
    const [ isVisible, setIsVisible ] = useState(false);
    const [ message, setMessage ] = useState();
    const [ timer, setTimer ] = useState();

    useEffect(() => {
        console.log(isVisible); 
        console.log(timer)
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

    return (
        <NotificationContext.Provider value={{setIsVisible, getIsVisible, setMessage, setTimer}}>
            { children }
        </NotificationContext.Provider>
    )
}

export {
    NotificationContext,
    NotificationContextProvider
}