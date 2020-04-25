import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Incident from "./pages/Incident";
import Profile from "./pages/Profile";
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/incidents/new" component={Incident} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
