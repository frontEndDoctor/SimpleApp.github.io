// This is the parent of all other components
// Retrieve, and display will all be imported here and rendered too
// The global css for the app will be imported too

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisplayPost from "./display";
import RetrieveData from "./retrieve";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <RetrieveData />
          </Route>
          <Route path="/:id">
            <DisplayPost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
