import React, { useEffect, useState } from "react";
import "../scss/Notification.scss";

interface Props {
  duration: number;
  color: string;
  message: string;
}

export function Notification({ duration, color, message }: Props): JSX.Element {
  const [display, setDisplay] = useState<String>("block");

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
