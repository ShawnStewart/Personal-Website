import React, { Component } from "react";
import { Container, Button, Dropdown, Input } from "semantic-ui-react";
import Header from "../Header/Header";
import axios from "axios";
import Numbered from "../../Img/NumberedTiles.jpg";
import Running from "../../Img/RunningMan.jpg";
import "./SlidingPuzzle.css";

export default class SlidingPuzzle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: 0,
      completed: null,
      showReset: false,
      timerOn: false,
      moves: 0,
      timer: 0,
      username: "",
      submitError: false,
      submitSuccess: false
    };
  }

  changeImage = (e, { value }) => {
    this.setState({
      picture: value,
      completed: null,
      showReset: false,
      moves: 0
    });
  };

  splitImage = () => {
    this.setState({ completed: null });
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
      img.src = Numbered;
    } else if (this.state.picture === 1) {
      img.src = Running;
    }
  };

  randomizePuzzle = () => {
    this.setState({ completed: false, moves: 0, timer: 0 });
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
    if (this.state.timerOn) this.stopTimer();
    this.setState({ showReset: false, timerOn: false, moves: 0, timer: 0 });
    this.splitImage();
  };

  findFewestMoves = () => {
    let currentPuzzle = [].slice
      .call(document.getElementById("puzzle").childNodes)
      .map(node => node.id);
    let emptyIndex = currentPuzzle.indexOf("empty");
    let moveCount = 0;
    let currentPath = [];
    let result = 100;
    let resultPath = [];

    const findSolution = thisMove => {
      console.log(result, resultPath);
      // currentPuzzle.forEach((t, i) => console.log(`${i}: ${t}`));
      // Check if this move is a valid one
      if (thisMove) {
        if (emptyIndex + thisMove < 0 || emptyIndex + thisMove > 15) {
          console.log("Out of bounds.");
          return;
        }

        if (emptyIndex % 4 === 0 && thisMove === -1) {
          console.log("Invalid move!");
          return;
        }

        if (
          (emptyIndex === 3 || emptyIndex === 7 || emptyIndex === 11) &&
          thisMove === 1
        ) {
          console.log("Can't go that way either!");
          return;
        }

        if (currentPath[currentPath.length - 1] * -1 === thisMove) {
          console.log("Silly computer, that would be redundant...");
          return;
        }
      }

      // Do this move
      if (thisMove !== 0) {
        console.log(
          "Swapping indicies",
          currentPuzzle[emptyIndex],
          currentPuzzle[emptyIndex + thisMove]
        );
        swapTiles(emptyIndex, emptyIndex + thisMove);
        moveCount++;
        currentPath.push(thisMove);
      }

      // Check if the puzzle is now solved
      if (checkIfSolved(currentPuzzle)) {
        if (result) {
          console.log("New solution found!");
          if (moveCount < result) {
            result = moveCount;
            resultPath = currentPath.map(x => x);
            console.log(
              "... and it was better than the last!",
              result,
              resultPath
            );
          }
        } else {
          result = moveCount;
          resultPath = currentPath.map(x => x);
          console.log(
            "%cFirst solution found!",
            "color: orange; font-size: 18px; font-weight: bold;",
            result,
            resultPath
          );
        }
      }

      // Recurse over all possible moves
      if (moveCount < result) {
        console.log(
          "%cTrying up",
          "color: indianred; font-size: 20px; font-weight: bold;"
        );
        findSolution(-4);
        console.log(
          "%cTrying right",
          "color: indianred; font-size: 20px; font-weight: bold;"
        );
        findSolution(1);
        console.log(
          "%cTrying down",
          "color: indianred; font-size: 20px; font-weight: bold;"
        );
        findSolution(4);
        console.log(
          "%cTrying left",
          "color: indianred; font-size: 20px; font-weight: bold;"
        );
        findSolution(-1);
      }

      // Going back a move
      console.log(
        "%cGoing back a move",
        "color: dodgerblue; font-size: 18px; font-weight: bold;"
      );
      swapTiles(emptyIndex, emptyIndex + currentPath.pop() * -1);
      moveCount--;
    };

    // Tile swapping helper function
    const swapTiles = (index1, index2) => {
      // Update empty index, move count, and current path
      console.log(emptyIndex, index1, index2);
      emptyIndex = emptyIndex === index1 ? index2 : index1;

      // Swap tiles
      [currentPuzzle[index1], currentPuzzle[index2]] = [
        currentPuzzle[index2],
        currentPuzzle[index1]
      ];
    };

    // Solve check helper function
    const checkIfSolved = arr => {
      for (let i = 0; i < 15; i++) {
        if (arr[i] !== `tile${i}`) return false;
      }
      return true;
    };

    findSolution(0);
    console.log(result, resultPath);
  };

  cheatTest = () => {
    const p = document.getElementById("puzzle");
    this.swapTiles(p, p.childNodes[15], p.childNodes[11]);
    this.swapTiles(p, p.childNodes[10], p.childNodes[11]);
    this.swapTiles(p, p.childNodes[10], p.childNodes[14]);
    this.swapTiles(p, p.childNodes[15], p.childNodes[14]);
    this.swapTiles(p, p.childNodes[15], p.childNodes[11]);
    this.swapTiles(p, p.childNodes[10], p.childNodes[11]);
  };

  startTimer = () => {
    this.myInterval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.myInterval);
  };

  handleTileClick = e => {
    if (this.state.completed) return;
    if (!this.state.timerOn) {
      this.startTimer();
      this.setState({ timerOn: true });
    }
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
    this.stopTimer();
    this.setState({ completed: true, showReset: false, timerOn: false });
  };

  submitScore = () => {
    axios
      .post(
        `${process.env.REACT_APP_URL}/api/projects/sliding-puzzle/hiscores`,
        {
          username: this.state.username,
          moves: this.state.moves,
          time: this.state.timer
        }
      )
      .then(res => this.setState({ submitError: false, submitSuccess: true }))
      .catch(err => this.setState({ submitError: true }));
  };

  componentWillMount = () => {
    this.props.updateMenu("portfolio");
  };

  componentDidMount = () => {
    this.splitImage();
  };

  componentDidUpdate = (prevProps, prevState) => {
    // picture selection was updated
    if (this.state.picture !== prevState.picture) {
      this.splitImage();
    }
  };

  render() {
    const pictureOptions = [
      { value: 0, text: "Numbered" },
      { value: 1, text: "Running Man" }
    ];
    return (
      <div className="SlidingPuzzle">
        <Header main={"Sliding Puzzle"} />
        <div className="SlidingPuzzle__Body">
          <Container textAlign="center">
            <Button.Group>
              <Button
                onClick={this.randomizePuzzle}
                disabled={this.state.completed === false}
                color="teal"
                content="Scramble"
              />
              <Button
                onClick={this.handleReset}
                disabled={!this.state.showReset || this.state.completed}
                color="teal"
                content="Reset"
              />
            </Button.Group>
            <div className="SlidingPuzzle__Options">
              <div>
                <Dropdown
                  defaultValue={0}
                  selection
                  options={pictureOptions}
                  onChange={this.changeImage}
                  disabled={this.state.completed === false}
                />
              </div>
              {/* <Button onClick={this.findFewestMoves}>Cheat</Button>
          <Button onClick={this.cheatTest}>Test</Button> */}
              <div className="SlidingPuzzle__Timer">{`Timer: ${Math.floor(
                this.state.timer / 60
              )}:${this.state.timer % 60 < 10 ? "0" : ""}${this.state.timer %
                60}`}</div>
              <div>Moves: {this.state.moves}</div>
            </div>
            {this.state.completed ? (
              this.state.submitSuccess ? (
                <p>Your score was saved successfully!</p>
              ) : (
                <div>
                  <p>
                    Congratulations, you've won! Enter your name for the
                    hiscores.
                  </p>
                  <Input
                    placeholder="Enter your name"
                    value={this.state.username}
                    onChange={(e, { value }) =>
                      this.setState({ username: value })
                    }
                  />
                  <Button content="Submit" onClick={this.submitScore} />
                  {this.state.submitError ? (
                    <p>Sorry, there was an error saving your score...</p>
                  ) : null}
                </div>
              )
            ) : null}
            <div id="puzzle" />
          </Container>
        </div>
      </div>
    );
  }
}
