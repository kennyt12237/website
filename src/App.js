import React from "react";
import { AppRoute, projects } from "./Website";
import "./App.scss";

function App() {
  return <AppRoute projects={projects} />;
}

export default App;
