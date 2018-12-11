import React from 'react'
import { Trans } from 'react-i18next'

export default class Tools extends React.PureComponent {
  render() {
    return (
      <section role="list of tools" className="profile-section" tabIndex="4">
        <h2>
          <Trans i18nKey="toolbox.title" />
        </h2>
        <ul className="vertical-line">
          <li className="vertical-line-content">
            <div className="bulleted content-header">
              <div className="content-title">
                <Trans i18nKey="toolbox.software" />
              </div>
            </div>
            <div className="bulleted content-subheader">
              <ul className="content-skill-list">
                <li>Adobe Suite</li>
                <li>After Effects</li>
                <li>Docker</li>
                <li>VS Code</li>
                <li>Unity</li>
              </ul>
            </div>
          </li>
          <li className="vertical-line-content">
            <div className="bulleted content-header">
              <div className="content-title">
                <Trans i18nKey="toolbox.front" />
              </div>
            </div>
            <div className="bulleted content-subheader">
              <ul className="content-skill-list">
                <li>React</li>
                <li>Typescript</li>
                <li>ES6</li>
                <li>SCSS</li>
                <li>CSS Grid</li>
                <li>Flexbox</li>
                <li>Bootstrap</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Netlify</li>
              </ul>
            </div>
          </li>
          <li className="vertical-line-content">
            <div className="bulleted content-header">
              <div className="content-title">
                <Trans i18nKey="toolbox.back" />
              </div>
            </div>
            <div className="bulleted content-subheader">
              <ul className="content-skill-list">
                <li>GraphQL</li>
                <li>PostgreSQL</li>
                <li>Apollo</li>
                <li>Heroku</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>Sequelize</li>
              </ul>
            </div>
          </li>
          <li className="vertical-line-content">
            <div className="bulleted content-header">
              <div className="content-title">
                <Trans i18nKey="toolbox.vc" />
              </div>
            </div>
            <div className="bulleted content-subheader">
              <ul className="content-skill-list">
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}
