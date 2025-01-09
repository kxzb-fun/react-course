import { Component } from "react";


export class TimerA extends Component {
  constructor(props) {
    super(props);
    this.state = { timeLeft: 10 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeLeft: this.state.timeLeft - 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Timer A: {this.state.timeLeft}</div>;
  }
}

export class TimerB extends Component {
  constructor(props) {
    super(props);
    this.state = { timeLeft: 5 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeLeft: this.state.timeLeft - 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Timer B: {this.state.timeLeft}</div>;
  }
}


