import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { translate } from "react-i18next";
import Profile from "./components/profile.js";
import Main from "./components/work/main";
import "./styles/index.js";

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Profile} />
      <Route exact={true} path="/work" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default translate("common")(App);
