import React from "react";
import "./App.scss";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import HomeContent from "./HomePage/Components/HomeContent";
import ProjectContentList from "./Media/Components/ProjectContentList";
import { Layout } from './HomePage';
import { projects } from "./Contracts/Project";
import LoginRoute from "./ClientRoute/LoginRoute";
import { NotificationOverlay } from "./Notification";
import ChainRoute from "./ClientRoute/ChainRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/website" element={<Layout NotificationOverlay={<NotificationOverlay id={"notification-root"}/>} />}>
          <Route index element={<HomeContent />} />
          <Route element={<LoginRoute />}>
            <Route element={<ChainRoute />}>
              <Route
                path="projects"
                element={<ProjectContentList projects={projects} />}
              />
            </Route>
          </Route>
        </Route>
        <Route
            path="*"
            element={<Navigate to="/website" />}
          />
      </Routes>
    </Router>
  );
}

export default App;
