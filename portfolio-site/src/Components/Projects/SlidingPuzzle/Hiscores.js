import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Header from "../../Header/Header";
import axios from "axios";

export default class Hiscores extends Component {
  componentDidMount = () => {
    console.log("cdm");
    axios
      .get(`${process.env.REACT_APP_URL}/api/projects/sliding-puzzle/hiscores`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    this.props.updateMenu("portfolio");
    return (
      <div className="Hiscores">
        <Header main={"Sliding Puzzle Hiscores"} />
        <div className="Hiscores__body">
          <Container />
        </div>
      </div>
    );
  }
}
