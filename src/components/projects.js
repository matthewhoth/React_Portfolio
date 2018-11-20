import React from 'react'
import { Link } from 'gatsby'
import { Trans } from 'react-i18next'
export default class Project extends React.PureComponent {
  render() {
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
        <Link to="/projects" style={{ zIndex: 999 }}>
          <ul>
            <li className="project">
              <div className="project-image working">
                <video
                  loop={true}
                  autoPlay={true}
                  preload="none"
                  className="background_video"
                  muted={true}
                  playsInline={true}
                  src={require(`../images/${this.props.language}.mp4`)}
                  type="video/mp4"
                />
              </div>
            </li>
          </ul>
        </Link>
      </section>
    )
  }
}
