import React from 'react'
import { Trans } from 'react-i18next'
export default class Skills extends React.PureComponent {
  render() {
    return (
      <section className="profile-section" tabIndex="8">
        <h2>
          <Trans i18nKey="pa.title" />
        </h2>
        <ul className="vertical-line-PA">
          <li className="vertical-line-content">
            <div className="bulleted content-header">
              <div className="content-title">
                <Trans i18nKey="pa.achievement1" />
              </div>
            </div>
          </li>
          <li className="vertical-line-content">
            <div className="bulleted content-header">
              <div className="content-title">
                <Trans i18nKey="pa.achievement2" />
              </div>
            </div>
          </li>
          <li className="vertical-line-content">
            <div className="bulleted content-header">
              <div className="content-title">
                <Trans i18nKey="pa.achievement3" />
              </div>
            </div>
          </li>
          <li className="vertical-line-content">
            <div className="bulleted content-header">
              <div className="content-title">
                <Trans i18nKey="pa.achievement4" />
              </div>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}
