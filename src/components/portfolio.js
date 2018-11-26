import React from 'react'
import { Trans } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import resume from 'file-loader?name=matthewhoth_[name].[ext]!../../static/resume.pdf'

export default class Portfolio extends React.PureComponent {
  render() {
    return (
      <header className="app-portfolio-container">
        <div className="app-portfolio">
          <section className="portfolio-resume">
            <div className="ribbon ribbon-top-left">
              <span onClick={this.props.click}>
                <Trans i18nKey="welcome.language" />
              </span>
            </div>
            <a href="/resume.pdf" download={resume}>
              <button className="resume-download btn">
                <i>
                  <FontAwesomeIcon icon={faDownload} />
                </i>
                <Trans i18nKey="welcome.resume" />
              </button>
            </a>
          </section>
          <section className="portfolio-title-container">
            <div className="portfolio-title">
              <h1 className="portfolio-title-top">
                <span className="portfolio-title-upper">
                  <Trans i18nKey="welcome.title-upper" />
                </span>
                <span className="portfolio-title-lower">
                  <Trans i18nKey="welcome.title-lower" />
                </span>
              </h1>
            </div>
          </section>
          <nav className="portfolio-contact">
            <ul className="portfolio-contact-list">
              <li>
                <a
                  href="https://goo.gl/maps/6uY34GshTM22"
                  rel="noopener"
                  target="_blank"
                >
                  <i>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </i>
                  <span className="i-label">
                    <Trans i18nKey="welcome.location" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/matthewhoth"
                  target="_blank"
                  rel="noopener"
                >
                  <i>
                    <FontAwesomeIcon icon={faGithub} />
                  </i>
                  <span className="i-label">
                    <Trans i18nKey="welcome.github" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${
                    this.props.language === 'en'
                      ? '+886-905-226-140'
                      : '0905-226-140'
                  }`}
                >
                  <i>
                    <FontAwesomeIcon icon={faPhone} />
                  </i>
                  <span className="i-label">
                    <Trans i18nKey="welcome.phone" />
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:matthewhoth@gmail.com">
                  <i>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <span className="i-label">matthewhoth@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
