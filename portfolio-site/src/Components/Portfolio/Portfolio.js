import React from "react";
import { Container } from "semantic-ui-react";
import "./Portfolio.css";

export default props => {
  props.updateMenu("portfolio");
  return (
    <div className="Portfolio">
      <div className="Portfolio__Header">
        <Container>
          <h1 className="Portfolio__Heading__Main">Full Stack Web Developer</h1>
          <p className="Portfolio__Heading__Secondary">
            Based out of Tampa, Florida.
          </p>
        </Container>
      </div>
      <Container>
        <div className="Portfolio__Body">
          <div className="Portfolio__Project proj1">
            <div>Project</div>
          </div>
          <div className="Portfolio__Project proj2">
            <div>Project</div>
          </div>
          <div className="Portfolio__Project proj3">
            <div>Project</div>
          </div>
          <div className="Portfolio__Project proj4">
            <div>Project</div>
          </div>
          <div className="Portfolio__Project proj5">
            <div>Project</div>
          </div>
          <div className="Portfolio__Project proj6">
            <div>Project</div>
          </div>
        </div>
      </Container>
    </div>
  );
};
