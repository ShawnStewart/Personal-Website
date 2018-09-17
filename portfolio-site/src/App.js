import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styling
import "semantic-ui-css/semantic.min.css";
import "./App.css";

// Components
import Nav from "./Components/Navbar/Navbar";
import About from "./Components/About/About";

class App extends Component {
  componentDidMount = () => {
    let path = window.location.href.split("http://localhost:3000/")[1];
    if (path === "") path = "portfolio";
    this.nav.setActiveMenuItem(path);
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            path="/"
            render={props => <Nav {...props} onRef={ref => (this.nav = ref)} />}
          />
          <Switch>
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
