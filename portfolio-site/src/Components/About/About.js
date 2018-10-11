import React from "react";
import { Container } from "semantic-ui-react";
import Header from "../Header/Header";
import selfie from "../../Img/selfie.jpg";
import Logos from "../LogoSection/LogoSection";
import "./About.css";

export default props => {
  props.updateMenu("about");
  return (
    <div className="AboutMe">
      <Header main={"About Me"} />
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
              Tampa, Florida. Collaborating with talented people to create
              highly-impacting and user-friendly applications is something I'm
              incredibly passionate about. My curiosity drives me to
              continuously learn and try new things both inside and out of the
              development environment.
            </p>
          </div>
        </div>
      </Container>
      <Logos />
    </div>
  );
};
