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
              {/* <a
                href="https://lambdaschool.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lambda School
              </a> */}
              Hey, I'm Shawn Stewart, a full stack web developer based out of
              Tampa, Florida. Collaborating with talented people to create high
              impact applications is something I'm genuinely passionate about.
              My curiosity drives me to be continuously learning and try new
              things both inside and out of the development environment.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
