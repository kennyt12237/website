import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import WithMetamask from "./Web3/HigherOrderComponents/WithMetamask";
import WithNotificationContextProvider from "./Notification/context/WithNotificationContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <WithMetamask>
      <WithNotificationContextProvider>
        <App />
      </WithNotificationContextProvider>
    </WithMetamask>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
