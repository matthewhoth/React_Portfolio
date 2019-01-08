import React from 'react'
import Portfolio from './portfolio'
import Intro from './intro'
import Commits from './commits'
import Tools from './tools'
import Experience from './experience'
import Skills from './skills'
import Project from './projects'
import i18n from 'i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Scrollbars } from 'react-custom-scrollbars'

export default class Profile extends React.PureComponent {
  state = { language: i18n.language }

  handleClickTop() {
    const { scrollbars } = this.refs
    scrollbars.scrollTop(0)
  }

  toggleLanguage() {
    if (this.state.language === 'en') {
      i18n.changeLanguage('ch')
      this.setState({ language: 'ch' })
    } else {
      i18n.changeLanguage('en')
      this.setState({ language: 'en' })
    }
    document.getElementsByTagName('html')[0].setAttribute('lang', i18n.language)
  }

  renderThumb() {
    return (
      <div
        style={{
          backgroundColor: '#fb8b24',
          borderRadius: 15,
          opacity: 0.8,
          zIndex: 999,
        }}
      />
    )
  }

  render() {
    return (
      <main>
        <noscript>
          <div style="border: 1px solid purple; padding: 10px">
            <span style="color:red">
              JavaScript is not enabled! Please enable it for a better website
              browsing experience.
            </span>
          </div>
        </noscript>
        <Scrollbars
          style={{ height: '100vh' }}
          universal={true}
          renderThumbVertical={this.renderThumb}
          ref="scrollbars"
        >
          <a
            className="sticky-default"
            name="Return to top button"
            onClick={this.handleClickTop.bind(this)}
            tabIndex="13"
          >
            <div className="sticky-button">
              <i>
                <FontAwesomeIcon icon={faAngleUp} />
              </i>
            </div>
          </a>
          <a
            className="sticky-mobile"
            name="Return to top button"
            onClick={this.handleClickTop.bind(this)}
            tabIndex="13"
          >
            <div className="sticky-button">
              <i>
                <FontAwesomeIcon icon={faAngleUp} />
              </i>
            </div>
          </a>
          <Portfolio
            click={this.toggleLanguage.bind(this)}
            language={this.state.language}
          />
          <article className="app-profile">
            <Intro />
            <Tools />
            <Experience />
            <Project language={this.state.language} />
            <Commits language={this.state.language} />
            <Skills />
          </article>
        </Scrollbars>
      </main>
    )
  }
}
