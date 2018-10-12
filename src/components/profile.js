import React from "react";

export default class Profile extends React.PureComponent {
  render() {
    return (
      <main>
        <div className="app-container">
          <a name="top-mobile" />
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
