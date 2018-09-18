import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styling
import "semantic-ui-css/semantic.min.css";
import "./App.css";

// Components
import Nav from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import PageNotFound from "./Components/404/PageNotFound";

class App extends Component {
  componentDidMount = () => {
    let path = window.location.href.split(process.env.REACT_APP_URL)[1];
    if (path === "") path = "portfolio";
    this.nav.handleMenuClick(null, { name: path });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            render={props => <Nav {...props} onRef={ref => (this.nav = ref)} />}
          />
          <div className="App__Body">
            <Switch>
              <Route
                path="/about"
                render={props => (
                  <About
                    {...props}
                    updateMenu={name =>
                      this.nav ? this.nav.setActiveMenuItem(name) : null
                    }
                  />
                )}
              />
              <Route
                exact
                path="/"
                render={props => (
                  <Portfolio
                    {...props}
                    updateMenu={name =>
                      this.nav ? this.nav.setActiveMenuItem(name) : null
                    }
                  />
                )}
              />
              <Route
                render={props => (
                  <PageNotFound
                    {...props}
                    updateMenu={name =>
                      this.nav ? this.nav.setActiveMenuItem(name) : null
                    }
                  />
                )}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
