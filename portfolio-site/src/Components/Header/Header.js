import React from "react";
import { Container } from "semantic-ui-react";
import "./Header.css";

export default props => {
  return (
    <div className="Header">
      <Container>
        <h2 className="Header__Main">{props.main}</h2>
        <h3 className="Header__Secondary">{props.secondary}</h3>
      </Container>
    </div>
  );
};
