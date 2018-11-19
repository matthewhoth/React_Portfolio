import React from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/zh-tw'
import i18n from 'i18next'
import { Trans } from 'react-i18next'

export default class Commits extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gitData: [],
    }
  }

  turts() {
    const gitData = this.state.gitData

    return gitData.map(gitData => (
      <li className="vertical-line-content" key={gitData.sha}>
        <div className="bulleted content-header timeline-header">
          <div className="content-title">
            <a
              href={`https://github.com/${gitData.repo.name}`}
              className="profile-a commit-repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              {gitData.repo.name}
            </a>
          </div>
          <div className="content-details">
            {i18n.language === 'en'
              ? moment(gitData.date)
                  .locale('en')
                  .format('MMM Do YYYY')
              : moment(gitData.date)
                  .locale('zh-tw')
                  .format('LL ')}
          </div>
        </div>
        <div className="bulleted content-subheader timeline-subheader">
          <div className="subheader-title commit-message">
            {gitData.message}
          </div>
        </div>
      </li>
    ))
  }

  async componentDidMount() {
    await axios
      .get(`https://api.github.com/users/matthewhoth/events/public?per_page=50`)
      .catch(error => console.log('API request error:', error))
      .then(res => {
        var pushEvents = res.data
          .filter(event => event.type === 'PushEvent')
          .slice(0, 5)

        var commitEvents = []

        pushEvents.forEach(function(pushEvent) {
          pushEvent.payload.commits.forEach(function(commit) {
            commitEvents.push({
              repo: pushEvent.repo,
              date: pushEvent.created_at,
              ...commit,
            })
          })
        })
        this.setState({
          gitData: commitEvents.slice(0, 5),
        })
      })
  }

  render() {
    return (
      <section className="profile-section">
        <h2>
          <Trans i18nKey="commits.title" />
        </h2>
        <ul className="vertical-line">{this.turts()}</ul>
      </section>
    )
  }
}
