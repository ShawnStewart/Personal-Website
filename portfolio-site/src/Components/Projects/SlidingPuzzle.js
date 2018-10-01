import React, { Component } from "react";
import { Container, Button } from "semantic-ui-react";
import picture from "../../Img/NumberedTiles.jpg";
import "./SlidingPuzzle.css";

export default class SlidingPuzzle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: null,
      moves: 0
    };
  }

  splitImage = () => {
    let canvas = document.createElement("canvas");
    let puzzle = document.getElementById("puzzle");
    let ctx = canvas.getContext("2d");
    let parts = [];
    let img = new Image(1000, 1000);

    img.onload = function() {
      let w = img.width / 4;
      let h = img.height / 4;

      for (let i = 0; i < 15; i++) {
        let x = (-w * i) % (w * 4);
        let y = -(h * Math.floor(i / 4));

        canvas.width = w;
        canvas.height = h;

        ctx.drawImage(this, x, y, w * 4, h * 4);
        parts.push(canvas.toDataURL());

        let slicedImage = document.createElement("div");
        slicedImage.style.backgroundImage = `url(${parts[i]})`;
        slicedImage.style.backgroundSize = "cover";
        slicedImage.id = `tile${i}`;
        slicedImage.className = "tile";
        puzzle.appendChild(slicedImage);
      }

      let empty = document.createElement("div");
      empty.id = "empty";
      empty.className = "tile";
      puzzle.appendChild(empty);
    };

    img.src = picture;
  };

  randomizePuzzle = () => {
    this.setState({ completed: false, moves: 0 });
    const puzzle = document.getElementById("puzzle");
    let childNodes = [].slice.call(puzzle.childNodes);
    childNodes.forEach(elem =>
      elem.addEventListener("click", this.handleTileClick)
    );
    let lastMove;
    const randomizeDelay = i => {
      (i => {
        setTimeout(() => {
          childNodes = [].slice.call(puzzle.childNodes);
          let empty = document.getElementById("empty");
          let emptyIndex = childNodes.indexOf(empty);
          let distance = lastMove;
          let movable = false;
          while (
            distance === lastMove ||
            emptyIndex + distance > 15 ||
            emptyIndex + distance < 0 ||
            !movable
          ) {
            switch (Math.floor(Math.random() * 4)) {
              case 0:
                distance = -4;
                break;
              case 1:
                distance = -1;
                break;
              case 2:
                distance = 1;
                break;
              case 3:
                distance = 4;
                break;
              default:
                break;
            }
            movable = this.checkMovability(emptyIndex, distance);
          }
          let swappingTile = childNodes[emptyIndex + distance];
          childNodes = this.swapTiles(puzzle, empty, swappingTile);
          lastMove = distance * -1;
        }, 30 * i);
      })(i);
    };
    for (let i = 0; i < 250; i++) {
      randomizeDelay(i);
    }
  };

  handleTileClick = e => {
    if (this.state.completed) return;
    const puzzle = document.getElementById("puzzle");
    const empty = document.getElementById("empty");
    let childNodes = [].slice.call(puzzle.childNodes);
    const distance = childNodes.indexOf(e.target) - childNodes.indexOf(empty);
    if (
      (distance === -4 ||
        distance === -1 ||
        distance === 1 ||
        distance === 4) &&
      this.checkMovability(childNodes.indexOf(empty), distance)
    ) {
      childNodes = this.swapTiles(puzzle, e.target, empty);
      this.setState({ moves: this.state.moves + 1 });
      this.checkForCompletion(childNodes);
    }
  };

  checkMovability = (emptyIndex, distance) => {
    if (emptyIndex % 4 === 0 && distance === -1) return false;
    if (
      (emptyIndex === 3 || emptyIndex === 7 || emptyIndex === 11) &&
      distance === 1
    )
      return false;
    return true;
  };

  swapTiles = (parent, element1, element2) => {
    let clone1 = element1.cloneNode(true);
    let clone2 = element2.cloneNode(true);
    clone1.addEventListener("click", this.handleTileClick);
    clone2.addEventListener("click", this.handleTileClick);
    parent.replaceChild(clone1, element2);
    parent.replaceChild(clone2, element1);
    return parent.childNodes;
  };

  checkForCompletion = nodes => {
    for (let i = 0; i < 15; i++) {
      if (nodes[i].id !== `tile${i}`) {
        return;
      }
    }
    this.setState({ completed: true });
  };

  componentDidMount = () => {
    this.splitImage();
  };

  render() {
    return (
      <div className="SlidingPuzzle">
        <div className="SlidingPuzzle__Header">
          <Container>
            <h2 className="SlizingPuzzle__Heading__main">Sliding Puzzle</h2>
          </Container>
        </div>
        <Container>
          <Button
            onClick={this.randomizePuzzle}
            disabled={this.state.completed === false}
          >
            Scramble
          </Button>
          <div>Moves: {this.state.moves}</div>
          {this.state.completed ? <div>You've won!</div> : null}
          <div className="SlidingPuzzle__Body">
            <div id="puzzle" />
          </div>
        </Container>
      </div>
    );
  }
}
