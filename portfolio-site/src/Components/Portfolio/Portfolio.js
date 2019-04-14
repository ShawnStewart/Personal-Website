import React from "react";
import { Container, Reveal, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Logos from "../LogoSection/LogoSection";
import "./Portfolio.css";

export default props => {
    props.updateMenu("portfolio");
    return (
        <div className="Portfolio">
            <Header main="Projects" />
            <Container>
                <div className="Portfolio__Body">
                    <div className="Portfolio__Project Project1">
                        <Reveal animated="fade" className="Project__Reveal">
                            <Reveal.Content
                                visible
                                className="Project__Reveal noPointerEvents"
                            >
                                <div className="visible__content Project1__Visible">
                                    NextSteps
                                </div>
                            </Reveal.Content>
                            <Reveal.Content hidden className="Project__Reveal">
                                <div className="hidden__content Project1__Hidden">
                                    <h2>NextSteps</h2>
                                    <div className="Project__BtnGroup">
                                        <Button color="teal" disabled>
                                            Learn more
                                        </Button>
                                        <a
                                            href="https://labs-next-leaderboard.herokuapp.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button color="teal">
                                                View the project
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </Reveal.Content>
                        </Reveal>
                    </div>

                    <div className="Portfolio__Project Project2">
                        <Reveal animated="fade" className="Project__Reveal">
                            <Reveal.Content
                                visible
                                className="Project__Reveal noPointerEvents"
                            >
                                <div className="visible__content Project2__Visible">
                                    Sliding Puzzle
                                </div>
                            </Reveal.Content>
                            <Reveal.Content hidden className="Project__Reveal">
                                <div className="hidden__content Project2__Hidden">
                                    <h2>Sliding Puzzle</h2>
                                    <div className="Project__BtnGroup">
                                        <Button disabled>Learn more</Button>
                                        <Link
                                            to="/legacy/projects/sliding-puzzle"
                                            onClick={() =>
                                                setTimeout(() => {
                                                    document
                                                        .querySelector(
                                                            ".SlidingPuzzle",
                                                        )
                                                        .scrollIntoView({
                                                            behavior: "smooth",
                                                        });
                                                }, 100)
                                            }
                                        >
                                            <Button>View the project</Button>
                                        </Link>
                                    </div>
                                </div>
                            </Reveal.Content>
                        </Reveal>
                    </div>

                    <div className="Portfolio__Project Project3">
                        <Reveal animated="fade" className="Project__Reveal">
                            <Reveal.Content
                                visible
                                className="Project__Reveal noPointerEvents"
                            >
                                <div className="visible__content Project3__Visible">
                                    Lambda Notes
                                </div>
                            </Reveal.Content>
                            <Reveal.Content hidden className="Project__Reveal">
                                <div className="hidden__content Project3__Hidden">
                                    <h2>Lambda Notes</h2>
                                    <div className="Project__BtnGroup">
                                        <Button disabled>Learn more</Button>
                                        <a
                                            href="https://super-duper-dope-notepad.netlify.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button>View the project</Button>
                                        </a>
                                    </div>
                                </div>
                            </Reveal.Content>
                        </Reveal>
                    </div>

                    <div className="Portfolio__Project Project4">
                        <Reveal animated="fade" className="Project__Reveal">
                            <Reveal.Content
                                visible
                                className="Project__Reveal noPointerEvents"
                            >
                                <div className="visible__content Project4__Visible">
                                    Snake Game
                                </div>
                            </Reveal.Content>
                            <Reveal.Content hidden className="Project__Reveal">
                                <div className="hidden__content Project4__Hidden">
                                    <h2>Snake Game</h2>
                                    <Link
                                        to="/legacy/projects/snake"
                                        onClick={() =>
                                            setTimeout(() => {
                                                document
                                                    .querySelector(".Snake")
                                                    .scrollIntoView({
                                                        behavior: "smooth",
                                                    });
                                            }, 100)
                                        }
                                    >
                                        <Button>View the project</Button>
                                    </Link>
                                </div>
                            </Reveal.Content>
                        </Reveal>
                    </div>

                    <div className="Portfolio__Project Project5">
                        <Reveal animated="fade" className="Project__Reveal">
                            <Reveal.Content
                                visible
                                className="Project__Reveal noPointerEvents"
                            >
                                <div className="visible__content Project5__Visible">
                                    Checkers
                                </div>
                            </Reveal.Content>
                            <Reveal.Content hidden className="Project__Reveal">
                                <div className="hidden__content Project5__Hidden">
                                    <h2>Checkers</h2>
                                    <div className="Project__BtnGroup">
                                        <Button disabled>Learn more</Button>
                                        <a
                                            href="https://codepen.io/ShawnStewart/pen/dKxxWN?editors=0110"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button>View the project</Button>
                                        </a>
                                    </div>
                                </div>
                            </Reveal.Content>
                        </Reveal>
                    </div>

                    <div className="Portfolio__Project Project6">
                        <Reveal animated="fade" className="Project__Reveal">
                            <Reveal.Content
                                visible
                                className="Project__Reveal noPointerEvents"
                            >
                                <div className="visible__content Project6__Visible">
                                    Coming Soon...
                                </div>
                            </Reveal.Content>
                            <Reveal.Content hidden className="Project__Reveal">
                                <div className="hidden__content Project6__Hidden">
                                    <h2>Coming Soon...</h2>
                                    {/* <Button disabled>Learn more</Button> */}
                                </div>
                            </Reveal.Content>
                        </Reveal>
                    </div>
                </div>
            </Container>
            <Logos />
            <div className="Portfolio__Header">
                <Container>
                    <h1 className="Portfolio__Heading__Main">
                        Full Stack Web Developer
                    </h1>
                    <p className="Portfolio__Heading__Secondary">
                        Based out of Tampa, Florida.
                    </p>
                </Container>
            </div>
        </div>
    );
};
