import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WithNotificationContextProvider } from "./Notification";
import { WalletContextProvider } from "./ContextProvider";
import { Provider } from "react-redux";
import store from "./Redux";

ReactDOM.render(
  <React.StrictMode>
    <WalletContextProvider>
      <Provider store={store}>
        <WithNotificationContextProvider>
          <App />
        </WithNotificationContextProvider>
      </Provider>
    </WalletContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
