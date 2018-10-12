import React from "react";
import Portfolio from "./portfolio";

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
            <div>Intro</div>
            <div>Tools</div>
            <div>Experience</div>
            <div>Skills</div>
            <div>Extra</div>
          </article>
        </div>
      </main>
    );
  }
}
