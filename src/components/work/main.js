import React from 'react'
import LeftButton from './leftbutton'
import RightButton from './rightbutton'
import ProjectPicture from './projectpicture.js'
import ProjectInfo from './projectinfo'
import i18next from 'i18next'
import common_ch from '../../translations/ch.json'
import common_en from '../../translations/en.json'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 1, rightActive: false }
  }

  componentDidMount() {
    if (!i18next.language) {
      i18next.init({
        interpolation: { escapeValue: false },
        lng: 'en',
        resources: {
          en: {
            common: common_en,
          },
          ch: {
            common: common_ch,
          },
        },
      })
    }
  }

  handleNext() {
    this.setState({
      rightActive: false,
    })
    if (this.state.counter < 5) {
      this.setState({
        counter: this.state.counter + 1,
      })
    } else if (this.state.counter === 5) {
      this.setState({ counter: 1 })
    }
  }

  handleLast() {
    this.setState({
      rightActive: true,
    })
    if (this.state.counter > 1) {
      this.setState({
        counter: this.state.counter - 1,
      })
    } else if (this.state.counter === 1) {
      this.setState({ counter: 5 })
    }
  }
  render() {
    return (
      <main className="project-portfolio">
        <div className="wrapper">
          <ProjectInfo
            counter={this.state.counter}
            rightActive={this.state.rightActive}
          />
          <ProjectPicture
            counter={this.state.counter}
            rightActive={this.state.rightActive}
          />
          <LeftButton
            counter={this.state.counter}
            click={this.handleNext.bind(this)}
          />
          <RightButton
            counter={this.state.counter}
            click={this.handleLast.bind(this)}
          />
        </div>
      </main>
    )
  }
}
