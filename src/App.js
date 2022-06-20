import React from "react";
import { AppRoute } from "./ClientRoute";
import { projects } from "./Contracts/Project";
import store from './Store';
import "./App.scss";

function App() {
  console.log('Initial State ', store.getState())
  return (
    <AppRoute projects={projects} />
  );
}

export default App;
