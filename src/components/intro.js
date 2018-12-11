import React from 'react'
import { Trans } from 'react-i18next'

export default class Intro extends React.PureComponent {
  render() {
    return (
      <section role="profile introduction" className="profile-section">
        <h1 className="profile-title">
          <Trans i18nKey="intro.title" />
        </h1>
        <p tabIndex="1">
          <Trans i18nKey="intro.blurb" />
          <a
            className="profile-a"
            href="mailto:matthewhoth@gmail.com"
            name="E-mail Address"
          >
            <Trans i18nKey="intro.link" />
          </a>
          <Trans i18nKey="intro.blurb2" />
        </p>
      </section>
    )
  }
}
