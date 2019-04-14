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
import SlidingPuzzle from "./Components/Projects/SlidingPuzzle/SlidingPuzzle";
import SlidingPuzzleHiscores from "./Components/Projects/SlidingPuzzle/Hiscores";
import Snake from "./Components/Projects/Snake/Snake";
import Contact from "./Components/Contact/Contact";
import Updating from "./Components/Updating/Updating";

class App extends Component {
    componentDidMount = () => {
        let path = window.location.href;
        path = path.split(window.location.origin)[1].split("/")[2];
        if (path === undefined || path.split("/")[0] === "projects")
            path = "portfolio";
        if (this.nav) this.nav.setActiveMenuItem(path);
    };

    render() {
        const legacyApp = props => (
            <div>
                <Nav {...props} onRef={ref => (this.nav = ref)} />
                <div className="App__Body">
                    <Switch>
                        <Route
                            path="/legacy/about"
                            render={props => (
                                <About
                                    {...props}
                                    updateMenu={name =>
                                        this.nav
                                            ? this.nav.setActiveMenuItem(name)
                                            : null
                                    }
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/legacy/"
                            render={props => (
                                <Portfolio
                                    {...props}
                                    updateMenu={name =>
                                        this.nav
                                            ? this.nav.setActiveMenuItem(name)
                                            : null
                                    }
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/legacy/contact"
                            render={props => (
                                <Contact
                                    {...props}
                                    updateMenu={name =>
                                        this.nav
                                            ? this.nav.setActiveMenuItem(name)
                                            : null
                                    }
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/legacy/projects/sliding-puzzle"
                            render={props => (
                                <SlidingPuzzle
                                    {...props}
                                    updateMenu={name =>
                                        this.nav
                                            ? this.nav.setActiveMenuItem(name)
                                            : null
                                    }
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/legacy/projects/sliding-puzzle/hiscores"
                            render={props => (
                                <SlidingPuzzleHiscores
                                    {...props}
                                    updateMenu={name =>
                                        this.nav
                                            ? this.nav.setActiveMenuItem(name)
                                            : null
                                    }
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/legacy/projects/snake"
                            render={props => (
                                <Snake
                                    {...props}
                                    updateMenu={name =>
                                        this.nav
                                            ? this.nav.setActiveMenuItem(name)
                                            : null
                                    }
                                />
                            )}
                        />
                        <Route
                            render={props => (
                                <PageNotFound
                                    {...props}
                                    updateMenu={name =>
                                        this.nav
                                            ? this.nav.setActiveMenuItem(name)
                                            : null
                                    }
                                />
                            )}
                        />
                    </Switch>
                </div>
                <Footer />
            </div>
        );

        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/legacy/" render={legacyApp} />
                        <Route component={Updating} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
