import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
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

    // this.updateTitle(name);
  };

  handleMenuClick = (e, { name }) => {
    this.setState({ activeMenuItem: name });
    if (name === "portfolio") name = "";

    if (`/${name}` !== this.props.history.location.pathname) {
      this.props.history.push(`/${name}`);
    }

    // this.updateTitle(name);
  };

  updateTitle = path => {
    if (path === "/") path = "portfolio";

    document.title = `${path.charAt(0).toUpperCase() +
      path.slice(1)} | Shawn Stewart - Full Stack Web Developer`;
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
          <div className="Nav__Container">
            <div className="Nav__Header">
              <Link
                to="/"
                onClick={() =>
                  this.handleMenuClick(null, { name: "portfolio" })
                }
                className="myLink"
              >
                <h1 className="Nav__Heading__Main">Shawn Stewart</h1>
              </Link>
              <Link
                to="/"
                onClick={() =>
                  this.handleMenuClick(null, { name: "portfolio" })
                }
                className="myLink"
              >
                <h1 className="Nav__Heading__Secondary">
                  Full Stack Web Developer
                </h1>
              </Link>
            </div>
            <div className="Nav__Menu__Container">
              <Menu
                pointing
                secondary
                widths="3"
                className="Nav__Menu"
                inverted
              >
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
              </Menu>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
