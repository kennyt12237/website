import { useContext } from 'react';
import  ReactDOM  from 'react-dom';
import { NotificationContext } from '../context/NotificationContextProvider';

export default function NotificationOverlay(props) {

    const { element } = props;
    const { getNotificationAlert } = useContext(NotificationContext);

    return (
        ReactDOM.createPortal(getNotificationAlert(), element)
    )
}