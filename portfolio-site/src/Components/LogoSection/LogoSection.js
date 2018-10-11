import React from "react";
import ReactLogo from "../../Img/react.png";
import Angular from "../../Img/angular.png";
import node from "../../Img/node.png";
import Mongo from "../../Img/mongo.png";
import MySQL from "../../Img/mysql.png";
import PgSQL from "../../Img/postgres.png";
import "./LogoSection.css";
import { Container } from "semantic-ui-react";

export default () => {
  return (
    <div className="LogoSection__Container">
      <Container>
        <div className="LogoSection">
          <div className="Logo__Container">
            <img src={ReactLogo} alt="React Logo" />
          </div>
          <div className="Logo__Container">
            <img src={Angular} alt="Angular Logo" />
          </div>
          <div className="Logo__Container">
            <img src={node} alt="Node.js Logo" />
          </div>
          <div className="Logo__Container">
            <img src={Mongo} alt="MongoDB Logo" />
          </div>
          <div className="Logo__Container">
            <img src={MySQL} alt="MySQL Logo" />
          </div>
          <div className="Logo__Container">
            <img src={PgSQL} alt="PostgreSQL Logo" />
          </div>
        </div>
      </Container>
    </div>
  );
};
