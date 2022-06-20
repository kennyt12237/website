import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ChainRoute from "./ChainRoute";
import LoginRoute from "./LoginRoute";
import { ProjectContentList } from "../Media";
import { NotificationOverlay } from "../Notification";
import { Layout, HomeContent } from "../HomePage";

export default function AppRoute(props) {
  const { projects } = props;
  return (
    <Router>
      <Routes>
        <Route
          path="/website"
          element={
            <Layout
              NotificationOverlay={
                <NotificationOverlay id={"notification-root"} />
              }
            />
          }
        >
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
        <Route path="*" element={<Navigate to="/website" />} />
      </Routes>
    </Router>
  );
}