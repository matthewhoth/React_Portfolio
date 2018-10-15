import React from "react";
import { Trans } from "react-i18next";
import i18n from "i18next";

var images = [
  "../images/lyricaltint.png",
  "../images/cryptotint.png",
  "../images/weathertint.png",
  "../images/logintint.png",
  "../images/youtubetint.png",
  "../images/lyricaltintd.png",
  "../images/cryptotintd.png",
  "../images/weathertintd.png",
  "../images/logintintd.png",
  "../images/youtubetintd.png"
];
export default class Portfolio extends React.PureComponent {
  render() {
    return (
      <header className="app-portfolio-container">
        <div className="app-portfolio">
          <section className="portfolio-resume">
            <div class="ribbon ribbon-top-left">
              <span
                onClick={() =>
                  i18n.language === "en"
                    ? i18n.changeLanguage("ch")
                    : i18n.changeLanguage("en")
                }
              >
                <Trans i18nKey="welcome.language" />
              </span>
            </div>

            <button className="resume-download btn">
              <i className="fas fa-download" />
              <Trans i18nKey="welcome.resume" />
            </button>
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
                <a href="https://goo.gl/maps/6uY34GshTM22" target="_blank">
                  <i className="fas fa-map-marker-alt" />
                  <span className="i-label">
                    <Trans i18nKey="welcome.location" />
                  </span>
                </a>
              </li>
              <li>
                <a href="google.com" target="_blank">
                  <i className="fab fa-linkedin-in" />
                  <span className="i-label">/in/ahyeah</span>
                </a>
              </li>
              <li>
                <a href="google.com" target="_blank">
                  <i className="fab fa-github" />
                  <span className="i-label">
                    <Trans i18nKey="welcome.github" />
                  </span>
                </a>
              </li>
              <li>
                <a href="google.com">
                  <i className="fas fa-phone" />
                  <span className="i-label">Phone Number</span>
                </a>
              </li>
              <li>
                <a href="google.com">
                  <i className="fas fa-envelope" />
                  <span className="i-label">name@myname.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
