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
              <div className="content-title">
                <Trans i18nKey="exp.worktitle1" />
              </div>
              <div className="content-details">
                <Trans i18nKey="exp.timeframe1" />
              </div>
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
              <div className="content-title">
                <Trans i18nKey="exp.worktitle2" />
              </div>
              <div className="content-details">
                <Trans i18nKey="exp.timeframe2" />
              </div>
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
              <div className="content-title">
                <Trans i18nKey="exp.worktitle3" />
              </div>
              <div className="content-details">
                <Trans i18nKey="exp.timeframe3" />
              </div>
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
              <div className="content-title">
                <Trans i18nKey="exp.worktitle4" />
              </div>
              <div className="content-details">
                <Trans i18nKey="exp.timeframe4" />
              </div>
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
