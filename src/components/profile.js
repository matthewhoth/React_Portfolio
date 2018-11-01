import React, { lazy, Suspense } from "react";
import Portfolio from "./portfolio";
import Intro from "./intro";
import Tools from "./tools";
import Experience from "./experience";
import Skills from "./skills";
import Project from "./projects";
import i18n from "i18next";

const Commits = lazy(() => import("./commits"));

export default class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { language: i18n.language };
  }

  toggleLanguage() {
    if (this.state.language === "en") {
      i18n.changeLanguage("ch");
      this.setState({
        language: "ch"
      });
    } else {
      i18n.changeLanguage("en");
      this.setState({
        language: "en"
      });
    }
    document
      .getElementsByTagName("html")[0]
      .setAttribute("lang", i18n.language);
  }

  render() {
    return (
      <main>
        <div
          data-simplebar
          data-simplebar-auto-hide="false"
          className="app-container"
        >
          <a href="#top" className="sticky-default">
            <div className="sticky-button">
              <i className="fas fa-angle-up" />
            </div>
          </a>
          <a href="#top-mobile" className="sticky-mobile">
            <div className="sticky-button">
              <i className="fas fa-angle-up" />
            </div>
          </a>
          <a href="#top-mobile" name="top-mobile" content="sticky button" />
          <Portfolio click={this.toggleLanguage.bind(this)} />
          <a name="top" />
          <article className="app-profile">
            <Intro />
            <Tools />
            <Experience />
            <Project language={this.state.language} />
            <Suspense fallback={<div>Loading...</div>}>
              <Commits />
            </Suspense>
            <Skills />
          </article>
        </div>
      </main>
    );
  }
}
