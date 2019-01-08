import React from 'react'
import { Link } from 'gatsby'
import { Trans } from 'react-i18next'
export default class Project extends React.PureComponent {
  render() {
    return (
      <Link to="/projects" tabIndex="6">
        <section className="profile-section">
          <div className="project-description">
            <h2>
              <Trans i18nKey="pro.title" />
            </h2>
          </div>

          <ul>
            <li className="project">
              <div className="project-image working">
                <video
                  loop={true}
                  autoPlay={true}
                  preload="none"
                  alt="Video preview of projects page"
                  className="background_video"
                  muted={true}
                  playsInline={true}
                  src={require(`../images/${this.props.language}.mp4`)}
                  type="video/mp4"
                />
              </div>
            </li>
          </ul>
        </section>
      </Link>
    )
  }
}
