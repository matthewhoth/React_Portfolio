import React from "react";
import { Trans } from "react-i18next";
export default class Skills extends React.PureComponent {
  render() {
    return (
      <section className="profile-section">
        <h2>
          <Trans i18nKey="pa.title" />
        </h2>
        <ul className="vertical-line-PA">
          <li className="vertical-line-content">
            <div className="bulleted content-header">
              <div className="content-title">Solo 5000km Bicycle Trip</div>
            </div>
          </li>
          <li className="vertical-line-content">
            <div className="bulleted content-header">
              <div className="content-title">
                Attained Fluency In Mandarin Chinese
              </div>
            </div>
          </li>
          <li className="vertical-line-content">
            <div className="bulleted content-header">
              <div className="content-title">Deadlifted 3x my bodyweight</div>
            </div>
          </li>
          <li className="vertical-line-content">
            <div className="bulleted content-header">
              <div className="content-title">Completed a Vipassanā trip</div>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
