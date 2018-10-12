import React from "react";
import { Trans } from "react-i18next";
import i18n from "i18next";

export default class Portfolio extends React.PureComponent {
  render() {
    return (
      <header>
        <div>
          <section>
            <button>
              <i />
              <Trans i18nKey="welcome.resume" />
            </button>
            <button onClick={() => i18n.changeLanguage("ch")}>ch</button>
            <button onClick={() => i18n.changeLanguage("en")}>en</button>
          </section>
          <section>
            <div>
              <h1>
                <span>
                  <Trans i18nKey="welcome.title-upper" />
                </span>
                <span>
                  <Trans i18nKey="welcome.title-lower" />
                </span>
              </h1>
            </div>
          </section>
          <nav>
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i />
                  <span>
                    <Trans i18nKey="welcome.location" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i />
                  <span>/in/ahyeah</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i />
                  <span>
                    <Trans i18nKey="welcome.github" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i />
                  <span>Phone Number</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i />
                  <span>name@myname.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
