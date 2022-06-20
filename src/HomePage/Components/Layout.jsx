import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout(props) {
  const { NotificationOverlay } = props;
  return (
    <div className="background">
      <Header logo={process.env.PUBLIC_URL + "/k-logo.png"} name="Kenny Tang" />
      {NotificationOverlay}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
