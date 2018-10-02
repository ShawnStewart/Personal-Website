import React, { Component } from "react";
import { Container, Button, Dropdown } from "semantic-ui-react";
import Numbered from "../../Img/NumberedTiles.jpg";
import Running from "../../Img/RunningMan.jpeg";
import "./SlidingPuzzle.css";

export default class SlidingPuzzle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: 0,
      completed: null,
      showReset: false,
      moves: 0
    };
  }

  changeImage = (e, { value }) => {
    console.log("changing", value);
    this.setState({ picture: value });
  };

  splitImage = () => {
    this.setState({ completed: null });
    console.log(this.state);
    let canvas = document.createElement("canvas");
    let puzzle = document.getElementById("puzzle");
    while (puzzle.firstChild) {
      puzzle.removeChild(puzzle.firstChild);
    }
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

    if (this.state.picture === 0) {
      console.log("0");
      img.src = Numbered;
    } else if (this.state.picture === 1) {
      console.log("1");
      img.src = Running;
    }
  };

  randomizePuzzle = () => {
    this.setState({ completed: false, moves: 0 });
    setTimeout(() => {
      this.setState({ showReset: true });
    }, 6500);
    const puzzle = document.getElementById("puzzle");
    let childNodes = [].slice.call(puzzle.childNodes);
    childNodes.forEach(elem =>
      elem.addEventListener("click", this.handleTileClick)
    );
    let lastMove;

    const randomizeDelay = i => {
      console.log(i);
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
        }, 25 * i);
      })(i);
    };
    for (let i = 0; i < 250; i++) {
      randomizeDelay(i);
    }
  };

  handleReset = () => {
    this.setState({ showReset: false });
    this.splitImage();
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
    if (
      !parent ||
      !element1 ||
      !element2 ||
      element1.parentNode !== parent ||
      element2.parentNode !== parent
    )
      return null;
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

  componentDidUpdate = (prevProps, prevState) => {
    // picture selection was updated
    if (this.state.picture !== prevState.picture) {
      console.log("updated");
      this.splitImage();
    }
  };

  render() {
    console.log(this.state);
    const pictureOptions = [
      { value: 0, text: "Numbered" },
      { value: 1, text: "Running Man" }
    ];
    return (
      <div className="SlidingPuzzle">
        <div className="SlidingPuzzle__Header">
          <Container>
            <h2 className="SlizingPuzzle__Heading__main">Sliding Puzzle</h2>
          </Container>
        </div>
        <Container>
          Picture:{" "}
          <Dropdown
            defaultValue={0}
            options={pictureOptions}
            onChange={this.changeImage}
            disabled={this.state.completed === false}
          />
          <Button
            onClick={this.randomizePuzzle}
            disabled={this.state.completed === false}
          >
            Scramble
          </Button>
          <Button
            onClick={this.handleReset}
            disabled={!this.state.showReset || this.state.completed}
          >
            Reset
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
