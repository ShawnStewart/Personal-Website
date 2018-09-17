import React from "react";
import { Container, Header } from "semantic-ui-react";
import selfie from "../../Img/monkey-selfie.jpg";
import "./About.css";

export default () => {
  return (
    <div className="AboutMe">
      <div className="About__Header">
        <Container>
          <h2 className="Heading">
            About Shawn
            <h3>An ambitious young developer</h3>
          </h2>
        </Container>
      </div>
      <Container>
        <div className="About__Body">
          <img src={selfie} alt="Selfie" className="Selfie" />
          <div className="AboutMe__Content">
            I am a full stack web developer. I am a full stack web developer. I
            am a full stack web developer. I am a full stack web developer. I am
            a full stack web developer. I am a full stack web developer. I am a
            full stack web developer. I am a full stack web developer. I am a
            full stack web developer. I am a full stack web developer. I am a
            full stack web developer. I am a full stack web developer. I am a
            full stack web developer. I am a full stack web developer.
          </div>
        </div>
      </Container>
    </div>
  );
};
