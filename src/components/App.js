import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {NavBar, Footer} from "./modules"
import HomePage from "./pages/HomePage/HomePage";
import CauseHomePage from "./pages/CausePage/CauseHomePage";
import CausePage from "./pages/CausePage/CausePage";
import GlobalStyle from "./Normalize";
import BoardPage from "./pages/OurBoard/BoardPage";
import AboutHomePage from "./pages/AboutPage/AboutHomePage";
import withTracker from "./../components/google_analytics/withTracker";
import {detect } from "detect-browser";

const browser = detect();
const browsers = {
    'chrome' : 68,
    'firefox' : 52,
    'safari': 10,
    'edge': 16,
    'ie' : 10,
}
class App extends Component {


  render() {
    if (browser && browsers.hasOwnProperty(browser.name) && Number(browser.version.split('.')[0]) <= browsers[`${browser.name}`]) {
      alert("It seems like the browser you are using is out of date and some of the features of our website might not be supproted. Please consider upgrading to a newer version.")
    }
    return (
      <>
          <GlobalStyle />

            <BrowserRouter>
            <>
              <NavBar />
              <main id="main">
              <Switch>
                <Route exact path="/" component={withTracker(HomePage)} />
                <Route exact path="/cause" component={withTracker(CauseHomePage)} />
                <Route exact path="/cause/:slug" component={withTracker(CausePage)} />
                <Route exact path="/board-page" component={withTracker(BoardPage)} />
                <Route exact path="/about" component={withTracker(AboutHomePage)} />

              </Switch>
              </main>
              <Footer />
              </>
            </BrowserRouter>
      </>
      );
  }

}
import("react-ga").then(ReactGA => {
  // ReactGA.initialize('UA-132415809-3')
  ReactGA.initialize('UA-132349651-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
});


export default App;