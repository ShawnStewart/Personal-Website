import React from "react";
import { Container } from "semantic-ui-react";
import selfie from "../../Img/selfie2.jpg";
import "./About.css";

export default props => {
  props.updateMenu("about");
  return (
    <div className="AboutMe">
      <div className="About__Header">
        <Container textAlign="center">
          <h2 className="Heading__Main">About Shawn</h2>
          <h3 className="Heading__Secondary">
            Developer of powerful user-friendly web applications
          </h3>
        </Container>
      </div>
      <Container>
        <div className="About__Body">
          <div className="Section1">
            <img src={selfie} alt="Selfie" className="Selfie" />
            <p className="AboutMe__Content">
              I am a full stack web developer and graduate of{" "}
              <a href="https://lambdaschool.com/" target="_blank">
                Lambda School
              </a>{" "}
              as of September 2018. I much enjoy collaborating with talented
              people to create highly impactful applications. I strive to
              continuously expand my knowledge to increase my overall value as a
              developer.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
