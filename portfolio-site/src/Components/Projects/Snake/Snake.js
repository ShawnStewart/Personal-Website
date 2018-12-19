import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Header from "../../Header/Header";
import "./Snake.css";

export default class Snake extends Component {
  constructor(props) {
    super(props);

    this.state = {
      length: 1,
      longestLength: 1,
      lastBite: 0,
      biggestBite: 0
    };

    this.gridSize = 20;
    this.boxSize = 35;
    this.head = { x: 10, y: 10 };
    this.tail = [{ x: 10, y: 10 }];
    this.length = 1;
    this.dirX = 0;
    this.dirY = 0;
    this.food = {
      x: Math.floor(Math.random() * this.gridSize),
      y: Math.floor(Math.random() * this.gridSize)
    };
    this.moveChosen = false;
    this.longestLength = 1;
    this.lastBite = 0;
    this.biggestBite = 0;
  }

  Game = () => {
    let canvas = document.querySelector("#Snake__Canvas");
    let ctx = canvas.getContext("2d");
    this.moveChosen = false;

    // Move in current direction
    this.head.x += this.dirX;
    this.head.y += this.dirY;

    // Borders
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Empty tiles
    ctx.fillStyle = "#696969";
    for (let y = 0; y < 20; y++) {
      for (let x = 0; x < 20; x++) {
        ctx.fillRect(
          x * this.boxSize + 1,
          y * this.boxSize + 1,
          this.boxSize - 2,
          this.boxSize - 2
        );
      }
    }

    // // Draw head
    // ctx.fillStyle = "#1c8cdb";
    // ctx.fillRect(
    //   this.head.x * this.boxSize + 1,
    //   this.head.y * this.boxSize + 1,
    //   this.boxSize - 2,
    //   this.boxSize - 2
    // );

    // Draw tail
    for (let i = 0; i < this.tail.length; i++) {
      if (i === this.tail.length - 1) {
        ctx.fillStyle = "#44b2ff";
      } else {
        ctx.fillStyle = "#1c8cdb";
      }
      ctx.fillRect(
        this.tail[i].x * this.boxSize + 1,
        this.tail[i].y * this.boxSize + 1,
        this.boxSize - 2,
        this.boxSize - 2
      );

      if (
        i > 0 &&
        this.tail[i].x === this.head.x &&
        this.tail[i].y === this.head.y
      ) {
        console.log(i);
        this.length -= i;
        this.lastBite = i;
        this.setState({ length: this.state.length - i, lastBite: i });
        if (this.lastBite > this.biggestBite) {
          this.biggestBite = this.lastBite;
          this.setState({ biggestBite: i });
        }
        console.log("bite", this.lastBite, this.biggestBite);
      }
    }

    // Draw food
    ctx.fillStyle = "#fa7272";
    ctx.fillRect(
      this.food.x * this.boxSize + 1,
      this.food.y * this.boxSize + 1,
      this.boxSize - 2,
      this.boxSize - 2
    );

    // Check if out of bounds
    if (this.head.x < 0) {
      this.head.x = this.gridSize - 1;
    } else if (this.head.x === this.gridSize) {
      this.head.x = 0;
    } else if (this.head.y < 0) {
      this.head.y = this.gridSize - 1;
    } else if (this.head.y === this.gridSize) {
      this.head.y = 0;
    }

    // Check if food has been eaten
    if (this.head.x === this.food.x && this.head.y === this.food.y) {
      this.length++;
      this.setState({ length: this.state.length + 1 });
      if (this.length > this.longestLength) {
        this.longestLength = this.length;
        this.setState({ longestLength: this.state.length });
      }
      console.log("length", this.length, this.longestLength);
      let spawnFood = true;

      while (spawnFood) {
        this.food = {
          x: Math.floor(Math.random() * this.gridSize),
          y: Math.floor(Math.random() * this.gridSize)
        };

        for (let i = 0; i < this.tail.length; i++) {
          if (
            this.tail[i].x === this.food.x &&
            this.tail[i].y === this.food.y
          ) {
            console.log("spawned in tail");
            break;
          } else if (i === this.tail.length - 1) {
            spawnFood = false;
          }
        }
      }
    }

    // Move tail
    this.tail.push(Object.assign({}, this.head));
    while (this.tail.length > this.length) {
      this.tail.shift();
    }
  };

  handleKeyPress = e => {
    if (!this.moveChosen) {
      switch (e.keyCode) {
        case 37:
          if (this.dirX === 0) {
            this.dirX = -1;
            this.dirY = 0;
            this.moveChosen = true;
          }
          break;
        case 38:
          if (this.dirY === 0) {
            this.dirX = 0;
            this.dirY = -1;
            this.moveChosen = true;
          }
          break;
        case 39:
          if (this.dirX === 0) {
            this.dirX = 1;
            this.dirY = 0;
            this.moveChosen = true;
          }
          break;
        case 40:
          if (this.dirY === 0) {
            this.dirX = 0;
            this.dirY = 1;
            this.moveChosen = true;
          }
          break;
        default:
          break;
      }
    }

    if (e.keyCode !== 123 && e.keyCode !== 116) {
      e.preventDefault();
    }
  };

  componentDidMount = () => {
    this.gameLoop = setInterval(this.Game, 1000 / 15);
    // document.addEventListener("keydown", e => {
    //   if (this.props.history.location.pathname === "/projects/snake") {
    //     this.handleKeyPress(e);
    //   }
    // });
    document.addEventListener("keydown", this.handleKeyPress);
  };

  componentWillUnmount = () => {
    clearInterval(this.gameLoop);
    document.removeEventListener("keydown", this.handleKeyPress);
  };

  render() {
    return (
      <div className="Snake">
        <Header main={"Snake Game"} />
        <div className="Snake__Body">
          <Container textAlign="center">
            <div>
              Length: {this.state.length} Longest: {this.state.longestLength}{" "}
              Bite: {this.state.lastBite} Biggest Bite: {this.state.biggestBite}
            </div>
            <canvas
              id="Snake__Canvas"
              width={this.boxSize * this.gridSize}
              height={this.boxSize * this.gridSize}
            />
          </Container>
        </div>
      </div>
    );
  }
}
