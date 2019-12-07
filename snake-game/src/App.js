import React, { Component } from "react";
import Snake from "./snake";
import Food from "./Food";

const randomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;

  return [x, y];
};

class App extends Component {
  state = {
    food: randomCoordinates(),
    direction: "RIGHT",
    speed: 300,
    snakeDots: [
      [0, 0],
      [2, 0]
    ]
  };
  onKeyDown = e => {
    e = e || window.event;
    switch (e.keyCode) {
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
    }
  };

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    onkeydown = this.onKeyDown;
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "UP":
        head = [head[0], head[1] - 2];
        break;
      case "DOWN":
        head = [head[0], head[1] + 2];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      // snakeDots: dots
    });
  };

  render() {
    return (
      <div className="gameArea">
        <Snake snakeDots={this.state.snakeDots} />
        <Food dot={this.state.food} />
      </div>
    );
  }
}

export default App;
