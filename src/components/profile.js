import React from "react";
import Portfolio from "./portfolio";
import Intro from "./intro";
import Tools from "./tools";
import Experience from "./experience";
import Skills from "./skills";
import Project from "./projects";
import Commits from "./commits";
import i18n from "i18next";

export default class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { language: i18n.language };
  }

  toggleLanguage() {
    if (this.state.language == "en") {
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
              <i className="" />
            </div>
          </a>
          <a href="#top-mobile" className="sticky-mobile">
            <div className="sticky-button">
              <i className="" />
            </div>
          </a>
          <a name="top-mobile" />
          <Portfolio click={this.toggleLanguage.bind(this)} />
          <a name="top" />
          <article className="app-profile">
            <Intro />
            <Tools />
            <Experience />
            <Skills />
            <Project language={this.state.language} />
            <Commits />
          </article>
        </div>
      </main>
    );
  }
}
