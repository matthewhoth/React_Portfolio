import React from "react";

export default class LeftButton extends React.PureComponent {
  render() {
    return (
      <aside
        onClick={this.props.click}
        className={`UpButton pictureL${
          this.props.counter !== 5 ? this.props.counter + 1 : 1
        }`}
      />
    );
  }
}
