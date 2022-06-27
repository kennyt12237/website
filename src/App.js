import React from "react";
import { AppRoute } from "./ClientRoute";
import { projects } from "./Contracts/Project";
import "./App.scss";

function App() {
  return <AppRoute projects={projects} />;
}

export default App;
