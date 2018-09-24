import React from "react";
import { Link } from "react-router-dom";
import { Container, Icon } from "semantic-ui-react";
import selfie from "../../Img/selfie.jpg";
import "./Footer.css";

export default props => {
  return (
    <div className="myFooter">
      <Container>
        <div className="Footer__Content">
          <div className="Footer__List">
            <span className="List__Header">Menu</span>
            <ul className="List__Content">
              <li>
                <Link to="/about" className="Footer__Link">
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="Footer__Link">
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="Footer__Link">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="Footer__List">
            <span className="List__Header">Social</span>
            <ul className="List__Content">
              <li>
                <a
                  href="https://Github.com/ShawnStewart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Footer__Link"
                >
                  <span>
                    <Icon name="github" />
                    Github
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shawn-stewart-05b78a169/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Footer__Link"
                >
                  <span>
                    <Icon name="linkedin" />
                    LinkedIn
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ShawnCodesWell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Footer__Link"
                >
                  <span>
                    <Icon name="twitter" />
                    Twitter
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="Footer__Epilogue">
            <img src={selfie} alt="Selfie" className="Epilogue__Img" />
            <p>
              A full stack web developer who is proficient in HTML5, CSS3, and
              Javascript ES2018. Shawn's passion to learn and hunger for success
              enables him to create powerful high-quality web applications using
              the latest technologies.
            </p>
          </div>
        </div>
        <div className="Copyright">
          {/* Copyright &copy; 2018{" "} */}
          <Link
            to="/"
            onClick={() => props.setMenu("portfolio")}
            className="Footer__Link"
          >
            Shawn Stewart Designs 2018
          </Link>
        </div>
      </Container>
    </div>
  );
};
