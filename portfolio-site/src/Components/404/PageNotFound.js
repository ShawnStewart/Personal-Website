import React from "react";
import { Container } from "semantic-ui-react";
import "./PageNotFound.css";

export default props => {
  props.updateMenu("none");
  return (
    <div className="PageNotFound">
      <div className="PageNotFound__Header">
        <Container textAlign="center">
          <h2 className="Heading__Main">404</h2>
          <h3 className="Heading__Secondary">Page not found</h3>
        </Container>
      </div>
      <Container>
        <div className="PageNotFound__Body">
          <h3>
            Sorry, but the page you are looking for can not be found. Perhaps
            you would like to try one of the following:
          </h3>
        </div>
      </Container>
    </div>
  );
};
