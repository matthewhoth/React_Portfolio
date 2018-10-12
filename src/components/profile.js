import React from "react";
import Portfolio from "./portfolio";
import Intro from "./intro";
import Tools from "./tools";
import Experience from "./experience";
import Skills from "./skills";
import Project from "./projects";

export default class Profile extends React.PureComponent {
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
              <i class="" />
            </div>
          </a>
          <a href="#top-mobile" class="sticky-mobile">
            <div class="sticky-button">
              <i class="" />
            </div>
          </a>
          <a name="top-mobile" />
          <Portfolio />
          <a name="top" />
          <article className="app-profile">
            <Intro />
            <Tools />
            <Experience />
            <Skills />
            <Project />
          </article>
        </div>
      </main>
    );
  }
}
