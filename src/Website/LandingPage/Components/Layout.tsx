import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  notificationOverlay?: React.ReactPortal;
}

export default function Layout({
  notificationOverlay,
}: LayoutProps): JSX.Element {

  return (
    <div className="background">
      <Header logo={process.env.PUBLIC_URL + "/k-logo.png"} name="Kenny Tang" />
      {notificationOverlay}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
