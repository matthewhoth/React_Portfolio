import React from "react";
import { Trans } from "react-i18next";
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
                ? "fadeInDown"
                : "fadeInUp"
              : this.props.counter === 2
                ? this.props.rightActive === true
                  ? "goodbye"
                  : "fadeOutUp"
                : this.props.counter === 5
                  ? this.props.rightActive === true
                    ? "fadeOutDown"
                    : "goodbye"
                  : "goodbye"
          }`}
          style={{}}
        >
          <h1>
            <Trans i18nKey="info.fullstack" />
          </h1>
          <p className="techs">ReactJS + GraphQL + Node + MongoDB 1</p>
          <div className="icons">
            <div className="sprite react" />
            <div className="sprite graph" />
            <div className="sprite node" />
            <div className="sprite mongo" />
          </div>
          <div className="view site">
            <a href="google.com" title="Go to website.com" target="_blank">
              view live website
            </a>
          </div>
          <div className="view code">
            <a href="google.com" title="view code">
              view code
            </a>
          </div>
        </div>
        <div
          className={`1 box c animated ${
            this.props.counter === 2
              ? this.props.rightActive === true
                ? "fadeInDown"
                : "fadeInUp"
              : this.props.counter === 3
                ? this.props.rightActive === true
                  ? "goodbye"
                  : "fadeOutUp"
                : this.props.counter === 1
                  ? this.props.rightActive === true
                    ? "fadeOutDown"
                    : "goodbye"
                  : "goodbye"
          }`}
          style={{}}
        >
          <h1>
            Cryptocurrency <br />
            Price Tracker
          </h1>
          <p className="techs">React Native + Redux + Flexbox 2</p>
          <div className="icons">
            <div className="sprite native" />
            <div className="sprite redux" />
            <div className="sprite flexbox" />
          </div>
          <div className="view site">
            <a href="google.com" title="google.com" target="_blank">
              view live website
            </a>
          </div>
          <div className="view code">
            <a href="google.com" title="view code">
              view code
            </a>
          </div>
        </div>{" "}
        <div
          className={`3 box c animated  ${
            this.props.counter === 3
              ? this.props.rightActive === true
                ? "fadeInDown"
                : "fadeInUp"
              : this.props.counter === 4
                ? this.props.rightActive === true
                  ? "goodbye"
                  : "fadeOutUp"
                : this.props.counter === 2
                  ? this.props.rightActive === true
                    ? "fadeOutDown"
                    : "goodbye"
                  : "goodbye"
          }`}
          style={{}}
        >
          <h1>Local Weather App</h1>
          <p className="techs">ReactJS + Sparklines + Redux 3</p>
          <div className="icons">
            <div className="sprite react" />
            <div className="sprite redux" />
          </div>
          <div className="view site">
            <a href="google.com" title="google.com" target="_blank">
              view live website
            </a>
          </div>
          <div className="view project">
            <a href="google.com" title="view project">
              view project
            </a>
          </div>
        </div>
        <div
          className={`4 box c animated  ${
            this.props.counter === 4
              ? this.props.rightActive === true
                ? "fadeInDown"
                : "fadeInUp"
              : this.props.counter === 5
                ? this.props.rightActive === true
                  ? "goodbye"
                  : "fadeOutUp"
                : this.props.counter === 3
                  ? this.props.rightActive === true
                    ? "fadeOutDown"
                    : "goodbye"
                  : "goodbye"
          }`}
          style={{}}
        >
          <h1>Login Component</h1>
          <p className="techs">ReactJS + GraphQL + Node 4</p>
          <div className="icons">
            <div className="sprite react" />
            <div className="sprite graph" />
            <div className="sprite node" />
          </div>
          <div className="view site">
            <a href="google.com" title="google.com" target="_blank">
              view live website
            </a>
          </div>
          <div className="view project">
            <a href="google.com" title="view project">
              view project
            </a>
          </div>
        </div>
        <div
          className={`1 box c animated  ${
            this.props.counter === 5
              ? this.props.rightActive === true
                ? "fadeInDown"
                : "fadeInUp"
              : this.props.counter === 1
                ? this.props.rightActive === true
                  ? "goodbye"
                  : "fadeOutUp"
                : this.props.counter === 4
                  ? this.props.rightActive === true
                    ? "fadeOutDown"
                    : "goodbye"
                  : "goodbye"
          }`}
          style={{}}
        >
          <h1>Reacted Youtube</h1>
          <p className="techs">ReactJS + Axios + Redux</p>
          <div className="icons">
            <div className="sprite react" />
            <div className="sprite redux" />
          </div>
          <div className="view site">
            <a href="google.com" title="google.com" target="_blank">
              view live website
            </a>
          </div>
          <div className="view code">
            <a href="google.com" title="view code">
              view code
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
