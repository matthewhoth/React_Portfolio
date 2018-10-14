import React from "react";
import LeftButton from "./leftbutton";
import RightButton from "./rightbutton";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
  }

  handleNext() {
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
          <LeftButton
            counter={this.state.counter}
            click={this.handleNext.bind(this)}
          />
          <RightButton
            counter={this.state.counter}
            click={this.handleLast.bind(this)}
          />
          <div className="content">3</div>
          <div>4</div>
        </div>
      </main>
    );
  }
}
