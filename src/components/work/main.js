import React from "react";
import LeftButton from "./leftbutton";
import RightButton from "./rightbutton";
import ProjectPicture from "./projectpicture.js";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1, rightActive: false, leftActive: false };
  }

  handleNext() {
    this.setState({
      rightActive: false,
      leftActive: true
    });
    if (this.state.counter < 5) {
      this.setState({
        counter: this.state.counter + 1
      });
      console.log(this.state.counter);
    } else if (this.state.counter === 5) {
      this.setState({ counter: 1 });
      console.log(this.state.counter);
    }

    console.log(this.state);
  }

  handleLast() {
    this.setState({
      leftActive: false,
      rightActive: true
    });
    if (this.state.counter > 1) {
      this.setState({
        counter: this.state.counter - 1
      });
      console.log(this.state.counter);
    } else if (this.state.counter === 1) {
      this.setState({ counter: 5 });
      console.log(this.state.counter);
    }

    console.log(this.state);
  }
  render() {
    return (
      <main className="project-portfolio">
        <div className="wrapper">
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
          <div>4</div>
        </div>
      </main>
    );
  }
}
