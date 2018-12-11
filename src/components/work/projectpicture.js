import React from 'react'
import lyrical from '../../images/lyrical.png'
import crypto from '../../images/crypto.png'
import airbnb from '../../images/airbnb.png'
import certification from '../../images/certification.png'
import slackapp from '../../images/slackapp.png'

export default class ProjectPicture extends React.PureComponent {
  render() {
    return (
      <section className="rightside">
        <div
          className={`box image animated  ${
            this.props.counter === 1
              ? this.props.rightActive === true
                ? 'fadeInUp'
                : 'fadeInDown'
              : this.props.counter === 2
              ? this.props.rightActive === true
                ? 'goodbye'
                : 'fadeOutDown'
              : this.props.counter === 5
              ? this.props.rightActive === true
                ? 'fadeOutUp'
                : 'goodbye'
              : 'goodbye'
          }`}
          style={{}}
        >
          <img alt="Wherebnb project" src={airbnb} />
        </div>

        <div
          className={`box image animated  ${
            this.props.counter === 2
              ? this.props.rightActive === true
                ? 'fadeInUp'
                : 'fadeInDown'
              : this.props.counter === 3
              ? this.props.rightActive === true
                ? 'goodbye'
                : 'fadeOutDown'
              : this.props.counter === 1
              ? this.props.rightActive === true
                ? 'fadeOutUp'
                : 'goodbye'
              : 'goodbye'
          }`}
          style={{}}
        >
          <img alt="Group instant messenger" src={slackapp} />
        </div>

        <div
          className={`box image animated  ${
            this.props.counter === 3
              ? this.props.rightActive === true
                ? 'fadeInUp'
                : 'fadeInDown'
              : this.props.counter === 4
              ? this.props.rightActive === true
                ? 'goodbye'
                : 'fadeOutDown'
              : this.props.counter === 2
              ? this.props.rightActive === true
                ? 'fadeOutUp'
                : 'goodbye'
              : 'goodbye'
          }`}
          style={{}}
        >
          <img alt="certification app" src={certification} />
        </div>

        <div
          className={`box image animated  ${
            this.props.counter === 4
              ? this.props.rightActive === true
                ? 'fadeInUp'
                : 'fadeInDown'
              : this.props.counter === 5
              ? this.props.rightActive === true
                ? 'goodbye'
                : 'fadeOutDown'
              : this.props.counter === 3
              ? this.props.rightActive === true
                ? 'fadeOutUp'
                : 'goodbye'
              : 'goodbye'
          }`}
          style={{}}
        >
          <img alt="lyric database app" src={lyrical} />
        </div>

        <div
          className={`box image animated  ${
            this.props.counter === 5
              ? this.props.rightActive === true
                ? 'fadeInUp'
                : 'fadeInDown'
              : this.props.counter === 1
              ? this.props.rightActive === true
                ? 'goodbye'
                : 'fadeOutDown'
              : this.props.counter === 4
              ? this.props.rightActive === true
                ? 'fadeOutUp'
                : 'goodbye'
              : 'goodbye'
          }`}
          style={{}}
        >
          <img alt="crypto price app" src={crypto} />
        </div>
      </section>
    )
  }
}
