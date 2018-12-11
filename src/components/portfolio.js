import React from 'react'
import { Trans } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import resume from 'file-loader?name=matthewhoth_[name].[ext]!../../static/resume.pdf'

export default class Portfolio extends React.PureComponent {
  render() {
    return (
      <header className="app-portfolio-container">
        <div className="app-portfolio">
          <section className="portfolio-resume">
            <div role="language toggle" className="ribbon ribbon-top-left">
              <span onClick={this.props.click} tabIndex="2">
                <Trans i18nKey="welcome.language" />
              </span>
            </div>
            <a
              tabIndex="3"
              href="/resume.pdf"
              role="resume download button"
              name="Resume Link"
              download={resume}
            >
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
          <nav
            className="portfolio-contact"
            role="list of contact options"
            tabIndex="9"
          >
            <ul className="portfolio-contact-list">
              <li>
                <a
                  href="https://goo.gl/maps/6uY34GshTM22"
                  rel="noopener"
                  target="_blank"
                  name="Physical Address Link"
                  role="link to physical address"
                  tabIndex="10"
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
                  name="Github Link"
                  role="link to github"
                  tabIndex="10"
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
                  name="Phone Number"
                  role="phone number"
                  tabIndex="11"
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
                <a
                  href="mailto:matthewhoth@gmail.com"
                  name="Email Address"
                  role="link to email address"
                  tabIndex="12"
                >
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
