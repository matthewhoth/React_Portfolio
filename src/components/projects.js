import React from "react";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
export default class Project extends React.PureComponent {
  render() {
    return (
      <section className="profile-section">
        <h2>
          <Trans i18nKey="pro.title" />
        </h2>
        <Link to={`/work`}>
          <ul>
            <li className="project">
              <div className="project-image working">
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
              <div className="project-description">
                <div className="project-name">
                  <Trans i18nKey="pro.lorem" />
                </div>
                <ul className="project-details">
                  <li>
                    <span className="project-details-label">
                      <a className="profile-a" href="#" target="_blank">
                        Live
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="project-details-label">
                      <a className="profile-a" href="#" target="_blank">
                        Source
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <p>
                <Trans i18nKey="pro.lorem-text" />
              </p>
            </li>
          </ul>{" "}
        </Link>
      </section>
    );
  }
}
