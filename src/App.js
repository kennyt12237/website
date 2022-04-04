import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import HomeContent from "./HomePage/Components/HomeContent";
import ProjectContentList from "./Media/Components/ProjectContentList";
import Header from "./HomePage/Components/Header";
import { projects } from "./Contracts/Project";
import LoginRoute from "./ClientRoute/LoginRoute";
import ErrorPage from "./ErrorPage";
import { NotificationOverlay } from "./Notification";
import ChainRoute from "./ClientRoute/ChainRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeContent />} />
          <Route element={<LoginRoute />}>
            <Route element={<ChainRoute />}>
              <Route
                path="/projects"
                element={<ProjectContentList projects={projects} />}
              />
            </Route>
          </Route>
          <Route
            path="/error"
            element={<ErrorPage errMsg={"Connect to metamask"} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <div className="background">
      <Header logo="./logo.png" name="Kenny Tang"/>
      <NotificationOverlay
        element={document.getElementById("notification-root")}
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
