import React from 'react'
import { Trans } from 'react-i18next'
export default class ProjectInfo extends React.PureComponent {
  render() {
    return (
      <nav className="leftside-top">
        <div className="box a">
          <Trans i18nKey="projectinfo.recent" />
        </div>
        <div
          className={`1 box c animated  ${
            this.props.counter === 1
              ? this.props.rightActive === true
                ? 'fadeInDown'
                : 'fadeInUp'
              : this.props.counter === 2
              ? this.props.rightActive === true
                ? 'goodbye'
                : 'fadeOutUp'
              : this.props.counter === 5
              ? this.props.rightActive === true
                ? 'fadeOutDown'
                : 'goodbye'
              : 'goodbye'
          }`}
          style={{}}
        >
          <h1>
            <Trans i18nKey="info.airbnb" />
          </h1>
          <p className="techs">
            <Trans i18nKey="description.airbnb" />
          </p>
          <div className="icons">
            <div className="sprite react" />
            <div className="sprite graph" />
            <div className="sprite typescript" />
            <div className="sprite redis" />
            <div className="sprite postgres" />
          </div>
          <div className="view code solo">
            <a
              href="https://github.com/matthewhoth/WhereRnR"
              rel="noopener"
              title="view code"
              name="Link to Github Project"
            >
              <Trans i18nKey="info.code" />
            </a>
          </div>
        </div>
        <div
          className={`1 box c animated  ${
            this.props.counter === 2
              ? this.props.rightActive === true
                ? 'fadeInDown'
                : 'fadeInUp'
              : this.props.counter === 3
              ? this.props.rightActive === true
                ? 'goodbye'
                : 'fadeOutUp'
              : this.props.counter === 1
              ? this.props.rightActive === true
                ? 'fadeOutDown'
                : 'goodbye'
              : 'goodbye'
          }`}
          style={{}}
        >
          <h1>
            <Trans i18nKey="info.slack" />
          </h1>
          <p className="techs">
            <Trans i18nKey="description.slack" />
          </p>
          <div className="icons">
            <div className="sprite react" />
            <div className="sprite redis" />
            <div className="sprite postgres" />
            <div className="sprite node" />
            <div className="sprite docker" />
          </div>

          <div className="view code solo">
            <a
              href="https://github.com/matthewhoth/Slack_Slinger_Slasher"
              title="view code"
              name="Link to Github Project"
              rel="noopener"
            >
              <Trans i18nKey="info.code" />
            </a>
          </div>
        </div>
        <div
          className={`3 box c animated  ${
            this.props.counter === 3
              ? this.props.rightActive === true
                ? 'fadeInDown'
                : 'fadeInUp'
              : this.props.counter === 4
              ? this.props.rightActive === true
                ? 'goodbye'
                : 'fadeOutUp'
              : this.props.counter === 2
              ? this.props.rightActive === true
                ? 'fadeOutDown'
                : 'goodbye'
              : 'goodbye'
          }`}
          style={{}}
        >
          <h1>
            <Trans i18nKey="info.certification" />
          </h1>
          <p className="techs">
            <Trans i18nKey="description.certification" />
          </p>
          <div className="icons">
            <div className="sprite react" />
            <div className="sprite graph" />
            <div className="sprite node" />
          </div>

          <div className="view code solo">
            <a
              href="https://github.com/matthewhoth/Certifikit-kat"
              title="view code"
              name="Link to Github Project"
              rel="noopener"
            >
              <Trans i18nKey="info.code" />
            </a>
          </div>
        </div>
        <div
          className={`4 box c animated  ${
            this.props.counter === 4
              ? this.props.rightActive === true
                ? 'fadeInDown'
                : 'fadeInUp'
              : this.props.counter === 5
              ? this.props.rightActive === true
                ? 'goodbye'
                : 'fadeOutUp'
              : this.props.counter === 3
              ? this.props.rightActive === true
                ? 'fadeOutDown'
                : 'goodbye'
              : 'goodbye'
          }`}
          style={{}}
        >
          <h1>
            <Trans i18nKey="info.fullstack" />
          </h1>
          <p className="techs">
            <Trans i18nKey="description.fullstack" />
          </p>
          <div className="icons">
            <div className="sprite react" />
            <div className="sprite graph" />
            <div className="sprite node" />
            <div className="sprite mongo" />
          </div>

          <div className="view code solo">
            <a
              href="https://github.com/matthewhoth/Lyricorice"
              title="view code"
              rel="noopener"
              name="Link to Github Project"
            >
              <Trans i18nKey="info.code" />
            </a>
          </div>
        </div>
        <div
          className={`1 box c animated ${
            this.props.counter === 5
              ? this.props.rightActive === true
                ? 'fadeInDown'
                : 'fadeInUp'
              : this.props.counter === 1
              ? this.props.rightActive === true
                ? 'goodbye'
                : 'fadeOutUp'
              : this.props.counter === 4
              ? this.props.rightActive === true
                ? 'fadeOutDown'
                : 'goodbye'
              : 'goodbye'
          }`}
          style={{}}
        >
          <h1>
            <Trans i18nKey="info.crypto1" /> <br />
            <Trans i18nKey="info.crypto2" />
          </h1>
          <p className="techs">
            <Trans i18nKey="description.crypto" />
          </p>
          <div className="icons">
            <div className="sprite flexbox" />
            <div className="sprite native" />
            <div className="sprite redux" />
          </div>

          <div className="view code solo">
            <a
              href="https://github.com/matthewhoth/NativeCryptoApp"
              title="view code"
              rel="noopener"
              name="Link to Github Project"
            >
              <Trans i18nKey="info.code" />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}
