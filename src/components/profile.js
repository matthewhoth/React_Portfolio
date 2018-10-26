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
          <a href="#top" class="sticky-default">
            <div class="sticky-button">
              <i class="fas fa-angle-up" />
            </div>
          </a>
          <a href="#top-mobile" class="sticky-mobile">
            <div class="sticky-button">
              <i class="fas fa-angle-up" />
            </div>
          </a>
          <a href="#top-mobile" name="top-mobile" content="sticky button" />
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
