import React from "react";
import { Link } from "react-router-dom";
import { Container, Icon } from "semantic-ui-react";
import selfie from "../../Img/selfie2.jpg";
import "./Footer.css";

const scrollIntoView = name => {
    document
        .querySelector(name)
        .scrollIntoView({ behavior: "smooth", block: "start" });
};

export default props => {
    const pathname = window.location.pathname;
    return (
        <div className="myFooter">
            <Container>
                <div className="Footer__Content">
                    <div className="Footer__Lists">
                        <div className="Footer__List">
                            <span className="List__Header">Menu</span>
                            <ul className="List__Content">
                                <li>
                                    <Link
                                        to="/legacy/about"
                                        className="Footer__Link"
                                        onClick={() =>
                                            scrollIntoView(".Header")
                                        }
                                    >
                                        <span>About</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/legacy/"
                                        className="Footer__Link"
                                        onClick={() => {
                                            return pathname === "/"
                                                ? scrollIntoView(".Header")
                                                : setTimeout(() => {
                                                      scrollIntoView(".Header");
                                                  }, 100);
                                        }}
                                    >
                                        <span>Portfolio</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/legacy/contact"
                                        className="Footer__Link"
                                        onClick={() => {
                                            return pathname === "/contact"
                                                ? scrollIntoView(".Header")
                                                : setTimeout(() => {
                                                      scrollIntoView(".Header");
                                                  }, 100);
                                        }}
                                    >
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
                                        href="https://github.com/shawnstewart"
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
                                        href="https://www.linkedin.com/in/shawn-stewart/"
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
                                        href="https://twitter.com/integrashawn"
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
                        <div className="Footer__List">
                            <span className="List__Header">Contact</span>
                            <ul className="List__Content">
                                <li>
                                    <Link
                                        to="/legacy/contact"
                                        className="Footer__Link"
                                        onClick={() => {
                                            return pathname === "/contact"
                                                ? scrollIntoView(".Header")
                                                : setTimeout(() => {
                                                      scrollIntoView(".Header");
                                                  }, 100);
                                        }}
                                    >
                                        <span>Send a message</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer__Epilogue">
                        <img
                            src={selfie}
                            alt="Selfie"
                            className="Epilogue__Img"
                        />
                        <p>
                            A full stack web developer who is proficient in
                            HTML5, CSS3, and Javascript ES2018. Shawn's passion
                            to learn and hunger for success enables him to
                            create powerful high-quality web applications using
                            the latest technologies.
                        </p>
                    </div>
                </div>
                <div className="Copyright">
                    {/* Copyright &copy; 2018{" "} */}
                    <Link
                        to="/legacy/"
                        className="Footer__Link"
                        onClick={() => {
                            return pathname === "/"
                                ? scrollIntoView(".myNav")
                                : setTimeout(() => {
                                      scrollIntoView(".myNav");
                                  }, 100);
                        }}
                    >
                        Shawn Stewart Designs 2018
                    </Link>
                </div>
            </Container>
        </div>
    );
};
