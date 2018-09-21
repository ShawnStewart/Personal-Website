import React from "react";
import { Container } from "semantic-ui-react";
import selfie from "../../Img/selfie.jpg";
import "./About.css";

export default props => {
  props.updateMenu("about");
  return (
    <div className="AboutMe">
      <div className="About__Header">
        <Container textAlign="center">
          <h2 className="Heading__Main">Who is Shawn?</h2>
          <h3 className="Heading__Secondary">An ambitious young developer</h3>
        </Container>
      </div>
      <Container>
        <div className="About__Body">
          <img src={selfie} alt="Selfie" className="Selfie" />
          <p className="AboutMe__Content">
            I am a full stack web developer. I am a full stack web developer. I
            am a full stack web developer. I am a full stack web developer. I am
            a full stack web developer. I am a full stack web developer. I am a
            full stack web developer. I am a full stack web developer. I am a
            full stack web developer. I am a full stack web developer. I am a
            full stack web developer. I am a full stack web developer. I am a
            full stack web developer. I am a full stack web developer.
          </p>
        </div>
      </Container>
    </div>
  );
};
