import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/profile.js";
import "./styles/profile.css";
import "./styles/portfolio.css";
import "./styles/fonts.css";
import "./styles/query.css";
import "./styles/simplebar.css";
import { translate } from "react-i18next";

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default translate("common")(App);
