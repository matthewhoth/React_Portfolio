import React from "react";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

export default class Project extends React.PureComponent {
  render() {
    console.log("language:", this.props.language);
    return (
      <section className="profile-section">
        <div className="project-description">
          <h2>
            <Trans i18nKey="pro.title" />
          </h2>
          <ul className="project-details">
            <li>
              <span className="project-details-label">
                <a className="profile-a" href="google.com" target="_blank">
                  <Trans i18nKey="pro.live" />
                </a>
              </span>
            </li>
            <li>
              <span className="project-details-label">
                <a className="profile-a" href="google.com" target="_blank">
                  <Trans i18nKey="pro.source" />
                </a>
              </span>
            </li>
          </ul>
        </div>
        <Link to={`/projects`}>
          <ul>
            <li className="project">
              <div className="project-image working">
                <video
                  loop={true}
                  autoPlay={true}
                  preload="none"
                  className="background_video"
                  mute="true"
                  playsInline={true}
                  src={require(`../images/${this.props.language}.mp4`)}
                  type="video/mp4"
                />
                <ul className="project-tech">
                  <li>
                    <i className="devicon-html5-plain" title="HTML5" />
                  </li>
                  <li>
                    <i className="devicon-css3-plain" title="CSS3" />
                  </li>
                  <li>
                    <i className="devicon-postgresql-plain" title="PostGres" />
                  </li>
                  <li>
                    <i
                      className="devicon-javascript-plain"
                      title="JavaScript"
                    />
                  </li>
                  <li>
                    <i className="devicon-react-plain" title="React.js" />
                  </li>
                  <li>
                    <i className="devicon-webpack-plain" title="Webpack" />
                  </li>
                  <li>
                    <i className="devicon-nodejs-plain" title="Node.js" />
                  </li>
                  <li>
                    <i className="devicon-express-original" title="Express" />
                  </li>
                  <li>
                    <i className="devicon-visualstudio-plain" title="VS Code" />
                  </li>
                  <li>
                    <i className="devicon-git-plain" title="Git" />
                  </li>
                  <li>
                    <i className="devicon-github-plain" title="GitHub" />
                  </li>
                </ul>
              </div>

              <p>
                <Trans i18nKey="pro.lorem-text" />
              </p>
            </li>
          </ul>
        </Link>
      </section>
    );
  }
}
