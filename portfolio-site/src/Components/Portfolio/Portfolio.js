import React from "react";
import { Container, Reveal, Button } from "semantic-ui-react";
import "./Portfolio.css";

export default props => {
  props.updateMenu("portfolio");
  return (
    <div className="Portfolio">
      <div className="Portfolio__Header">
        <Container>
          <h1 className="Portfolio__Heading__Main">Full Stack Web Developer</h1>
          <p className="Portfolio__Heading__Secondary">
            Based out of Tampa, Florida.
          </p>
        </Container>
      </div>
      <Container>
        <div className="Portfolio__Body">
          <div className="Portfolio__Project Project1">
            <Reveal animated="fade" className="Project__Reveal">
              <Reveal.Content visible className="Project__Reveal">
                <div className="visible__content Project1__Visible">
                  NextSteps
                </div>
              </Reveal.Content>
              <Reveal.Content hidden className="Project__Reveal">
                <div className="hidden__content Project1__Hidden">
                  <h2>NextSteps</h2>
                  <Button>Learn More</Button>
                </div>
              </Reveal.Content>
            </Reveal>
          </div>

          <div className="Portfolio__Project Project2">
            <Reveal animated="move" className="Project__Reveal">
              <Reveal.Content visible className="Project__Reveal">
                <div className="visible__content Project2__Visible">
                  Project 2
                </div>
              </Reveal.Content>
              <Reveal.Content hidden className="Project__Reveal">
                <div className="hidden__content Project2__Hidden">
                  <h2>Project 2</h2>
                  <Button>Learn More</Button>
                </div>
              </Reveal.Content>
            </Reveal>
          </div>

          <div className="Portfolio__Project proj3">
            <div>Project 3</div>
          </div>
          <div className="Portfolio__Project proj4">
            <div>Project 4</div>
          </div>
          <div className="Portfolio__Project proj5">
            <div>Project 5</div>
          </div>
          <div className="Portfolio__Project proj6">
            <div>Project 6</div>
          </div>
        </div>
      </Container>
    </div>
  );
};
