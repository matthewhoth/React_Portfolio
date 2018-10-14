import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/profile.js";
import Main from "./components/work/main";
import "./styles/profile.css";
import "./styles/portfolio.css";
import "./styles/portfolio-buttons.css";
import "./styles/project-portfolio.css";
import "./styles/fonts.css";
import "./styles/query.css";
import "./styles/animate.css";
import "./styles/bar.css";
import "./styles/rightside.css";
import "./styles/sections.css";
import "./styles/tools.css";
import "./styles/projects.css";
import { translate } from "react-i18next";

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Profile} />
      <Route exact={true} path="/work" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default translate("common")(App);
