import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ChainRoute from "./ChainRoute";
import LoginRoute from "./LoginRoute";
import { ProjectContentList } from "../ContentPage";
import { NotificationOverlay } from "../../Notification";
import { Layout, HomeContent } from "../LandingPage";
import useLoginStatus from "./LoginRoute/useLoginStatus";
import useChainStatus from "./ChainRoute/useChainStatus";

interface Project {
  title: string;
  texts: Array<string>;
  mediaSrc: string;
}

interface Props {
  projects: Array<Project>;
}

export default function AppRoute({ projects }: Props): JSX.Element {
  const { isConnected } = useLoginStatus();
  const { validChainId, chainInText } = useChainStatus();
  return (
    <Router>
      <Routes>
        <Route
          path="/website"
          element={<Layout notificationOverlay={<NotificationOverlay />} />}
        >
          <Route index element={<HomeContent />} />
          <Route element={<LoginRoute isConnected={isConnected} />}>
            <Route
              element={
                <ChainRoute
                  validChainId={validChainId}
                  chainInText={chainInText}
                />
              }
            >
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
