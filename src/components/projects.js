import React from 'react'
import { Link } from 'gatsby'
import { Trans } from 'react-i18next'
export default class Project extends React.PureComponent {
  lazyLoadHack() {
    return (
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
    )
  }
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
              <div className="project-image working">{this.lazyLoadHack}</div>
              <p>
                <Trans i18nKey="pro.lorem-text" />
              </p>
            </li>
          </ul>
        </Link>
      </section>
    )
  }
}
