import React, { useEffect, useState } from "react";
import "../scss/Notification.scss";

export default function Notification(props) {
  const { duration, color, message } = props;
  const [display, setDisplay] = useState("block");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay("none");
    }, duration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="notification-container"
      style={{ backgroundColor: `${color}`, display: `${display}` }}
    >
      <p className="notification-container--message"> {message} </p>
    </div>
  );
}
