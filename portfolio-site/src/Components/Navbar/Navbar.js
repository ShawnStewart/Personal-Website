import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Header, Menu } from "semantic-ui-react";
import "./Navbar.css";
export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItem: "portfolio"
    };
  }

  setActiveMenuItem = name => {
    this.setState({ activeMenuItem: name });
  };

  handleMenuClick = (e, { name }) => {
    this.setState({ activeMenuItem: name });

    if (name === "portfolio") {
      this.props.history.push("/");
    } else {
      this.props.history.push(name);
    }

    document.title = `${name.charAt(0).toUpperCase() +
      name.slice(1)} | Shawn Stewart - Full Stack Web Developer`;
  };

  componentDidMount = () => {
    this.props.onRef(this);
  };

  componentWillUnmount = () => {
    this.props.onRef(undefined);
  };

  render() {
    const { activeMenuItem } = this.state;
    return (
      <div className="myNav">
        <Container>
          <Grid columns="2">
            <Grid.Column width="8">
              <Header as="h1" textAlign="left" className="myHeader">
                <Header.Content>
                  <Link
                    to="/"
                    onClick={() => this.setActiveMenuItem("portfolio")}
                    className="myLink"
                  >
                    Shawn Stewart
                  </Link>
                </Header.Content>
              </Header>
              <Header sub as="h2" textAlign="left" className="mySubHeader">
                <Header.Content>
                  <Link
                    to="/"
                    onClick={() => this.setActiveMenuItem("portfolio")}
                    className="myLink"
                  >
                    Full Stack Web Developer
                  </Link>
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width="8">
              <Menu pointing secondary className="myMenu">
                <Menu.Item
                  name="about"
                  active={activeMenuItem === "about"}
                  onClick={this.handleMenuClick}
                />
                <Menu.Item
                  name="portfolio"
                  active={activeMenuItem === "portfolio"}
                  onClick={this.handleMenuClick}
                />
                <Menu.Item
                  name="contact"
                  active={activeMenuItem === "contact"}
                  onClick={this.handleMenuClick}
                />
                <Menu.Menu position="right">
                  <Menu.Item
                    name="hire"
                    active={activeMenuItem === "hire"}
                    onClick={this.handleMenuClick}
                  />
                </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
