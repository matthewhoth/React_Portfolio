import React from "react";
import { Trans } from "react-i18next";

export default class Experience extends React.PureComponent {
  render() {
    return (
      <section className="profile-section">
        <h2>
          <Trans i18nKey="exp.title" />
        </h2>
        <ul className="vertical-line">
          <li className="vertical-line-content">
            <div className="bulleted content-header timeline-header">
              <div className="content-title">Work Title 1</div>
              <div className="content-details">Jun. 2018 – Present</div>
            </div>
            <div className="bulleted content-subheader timeline-subheader">
              <div className="subheader-title">
                <a className="profile-a" href="google.com" target="_blank">
                  Work Place 1
                </a>
              </div>
              <div className="subheader-details">Freelance</div>
            </div>
          </li>
          <li className="vertical-line-content">
            <div className="bulleted content-header timeline-header">
              <div className="content-title">Work Title 2</div>
              <div className="content-details">May 2017 – Present</div>
            </div>
            <div className="bulleted content-subheader timeline-subheader">
              <div className="subheader-title">
                <a className="profile-a" href="google.com" target="_blank">
                  Work Place 2
                </a>
              </div>
              <div className="subheader-details">Freelance</div>
            </div>
          </li>
          <li className="vertical-line-content">
            <div className="bulleted content-header timeline-header">
              <div className="content-title">Work Title 3</div>
              <div className="content-details">Mar. 2017 – Nov. 2017</div>
            </div>
            <div className="bulleted content-subheader timeline-subheader">
              <div className="subheader-title">
                <a className="profile-a" href="google.com" target="_blank">
                  Work Place 3
                </a>
              </div>
              <div className="subheader-details">Freelance</div>
            </div>
          </li>
          <li className="vertical-line-content">
            <div className="bulleted content-header timeline-header">
              <div className="content-title">Work Title 4</div>
              <div className="content-details">Jan. 2017 – Mar. 2017</div>
            </div>
            <div className="bulleted content-subheader timeline-subheader">
              <div className="subheader-title">
                <a className="profile-a" href="google.com" target="_blank">
                  Work Place 4
                </a>
              </div>
              <div className="subheader-details">Freelance</div>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
