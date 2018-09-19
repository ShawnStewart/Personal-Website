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
                  <Button disabled>Learn More</Button>
                </div>
              </Reveal.Content>
            </Reveal>
          </div>

          <div className="Portfolio__Project Project2">
            <Reveal animated="fade" className="Project__Reveal">
              <Reveal.Content visible className="Project__Reveal">
                <div className="visible__content Project2__Visible">
                  Project 2
                </div>
              </Reveal.Content>
              <Reveal.Content hidden className="Project__Reveal">
                <div className="hidden__content Project2__Hidden">
                  <h2>Coming Soon...</h2>
                  {/* <Button disabled>Learn More</Button> */}
                </div>
              </Reveal.Content>
            </Reveal>
          </div>

          <div className="Portfolio__Project Project3">
            <Reveal animated="fade" className="Project__Reveal">
              <Reveal.Content visible className="Project__Reveal">
                <div className="visible__content Project3__Visible">
                  Lambda Notes
                </div>
              </Reveal.Content>
              <Reveal.Content hidden className="Project__Reveal">
                <div className="hidden__content Project3__Hidden">
                  <h2>Lambda Notes</h2>
                  <Button disabled>Learn More</Button>
                </div>
              </Reveal.Content>
            </Reveal>
          </div>

          <div className="Portfolio__Project Project4">
            <Reveal animated="fade" className="Project__Reveal">
              <Reveal.Content visible className="Project__Reveal">
                <div className="visible__content Project4__Visible">
                  Project 4
                </div>
              </Reveal.Content>
              <Reveal.Content hidden className="Project__Reveal">
                <div className="hidden__content Project4__Hidden">
                  <h2>Coming Soon...</h2>
                  {/* <Button disabled>Learn More</Button> */}
                </div>
              </Reveal.Content>
            </Reveal>
          </div>

          <div className="Portfolio__Project Project5">
            <Reveal animated="fade" className="Project__Reveal">
              <Reveal.Content visible className="Project__Reveal">
                <div className="visible__content Project5__Visible">
                  Project 5
                </div>
              </Reveal.Content>
              <Reveal.Content hidden className="Project__Reveal">
                <div className="hidden__content Project5__Hidden">
                  <h2>Coming Soon...</h2>
                  {/* <Button disabled>Learn More</Button> */}
                </div>
              </Reveal.Content>
            </Reveal>
          </div>

          <div className="Portfolio__Project Project6">
            <Reveal animated="fade" className="Project__Reveal">
              <Reveal.Content visible className="Project__Reveal">
                <div className="visible__content Project6__Visible">
                  Project 6
                </div>
              </Reveal.Content>
              <Reveal.Content hidden className="Project__Reveal">
                <div className="hidden__content Project6__Hidden">
                  <h2>Coming Soon...</h2>
                  {/* <Button disabled>Learn More</Button> */}
                </div>
              </Reveal.Content>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
};
