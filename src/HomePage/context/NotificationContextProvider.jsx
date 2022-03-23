import React, { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext();

function NotificationContextProvider(props) {

	const COLOR_GREEN = 'green';
	const COLOR_RED = 'red';

    const { children } = props;
    const [ isVisible, setIsVisible ] = useState(false);
    const [ message, setMessage ] = useState();
    const [ timer, setTimer ] = useState();
	const [ color, setColor ] = useState();

	const start = () => setTimeout(() => {
		setIsVisible(false)
	},timer);

    useEffect(() => {
        if (isVisible) {
			console.log("Starting");
			const newTimer = start();
            return () => { console.log("Clearing: " + newTimer ); clearTimeout(newTimer)}; 
        }
    }, [isVisible])

    const getIsVisible = () => {
        return isVisible;
    }

    const getMessage = () => {
        return message;
    }

	const getColor = () => {
		return color;
	}

	const successAlert = (message) => {
		setIsVisible(false);
		setMessage(message);
		setColor(COLOR_GREEN);
		setIsVisible(true);
	}

	const failedAlert = (message) => {
		setIsVisible(false);
		setMessage(message);
		setColor(COLOR_RED);
		setIsVisible(true)
	}

    return (
        <NotificationContext.Provider value={{setIsVisible, getIsVisible, setMessage, getMessage, setTimer, getColor, successAlert, failedAlert}}>
            { children }
        </NotificationContext.Provider>
    )
}

export {
    NotificationContext,
    NotificationContextProvider
}