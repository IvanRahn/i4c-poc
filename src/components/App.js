import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CauseHomePage from "./pages/CausePage/CauseHomePage";
import CausePage from "./pages/CausePage/CausePage";
import GlobalStyle from "./Normalize";
import BoardPage from "./pages/OurBoard/BoardPage";
import AboutHomePage from "./pages/AboutPage/AboutHomePage";
import withTracker from "./../components/google_analytics/withTracker";

class App extends Component {


  render() {
    return (
      <>
          <GlobalStyle />
            <BrowserRouter>
              <Switch>

                <Route exact path="/" component={withTracker(HomePage)} />
                <Route exact path="/cause" component={withTracker(CauseHomePage)} />
                <Route exact path="/cause/:slug" component={withTracker(CausePage)} />
                <Route exact path="/board-page" component={withTracker(BoardPage)} />
                <Route exact path="/about" component={withTracker(AboutHomePage)} />

              </Switch>
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