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
import SlidingPuzzle from "./Components/Projects/SlidingPuzzle";
import Contact from "./Components/Contact/Contact";

class App extends Component {
  componentDidMount = () => {
    let path = window.location.href;
    path = path.split(window.location.origin)[1].slice(1);
    if (path === "" || path.split("/")[0] === "projects") path = "portfolio";
    this.nav.setActiveMenuItem(path);
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
                exact
                path="/contact"
                render={props => (
                  <Contact
                    {...props}
                    updateMenu={name =>
                      this.nav ? this.nav.setActiveMenuItem(name) : null
                    }
                  />
                )}
              />
              <Route
                path="/projects/sliding_puzzle"
                render={props => (
                  <SlidingPuzzle
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
