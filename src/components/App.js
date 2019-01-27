import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {NavBar, Footer} from "./modules"
import HomePage from "./pages/HomePage/HomePage";
// import CauseHomePage from "./pages/CausePage/CauseHomePage";
// import CausePage from "./pages/CausePage/CausePage";
import GlobalStyle from "./Normalize";
// import BoardPage from "./pages/OurBoard/BoardPage";
// import AboutHomePage from "./pages/AboutPage/AboutHomePage";
import {detect } from "detect-browser";
const CauseHomePage = lazy(() => import("./pages/CausePage/CauseHomePage"))
const CausePage = lazy(() => import("./pages/CausePage/CausePage"))
const BoardPage = lazy(() => import("./pages/OurBoard/BoardPage"))
const AboutHomePage = lazy(() => import("./pages/AboutPage/AboutHomePage"))



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
    if (browser && (browsers.hasOwnProperty(browser.name) && Number(browser.version.split('.')[0]) <= browsers[`${browser.name}`]) ||!browsers.hasOwnProperty(browser.name))  {
      alert("It seems like the browser you are using is out of date and some of the features of our website might not be supproted. Please consider upgrading to a newer version.")
    }
    return (
      <>
          <GlobalStyle />

            <BrowserRouter>
            <>
              <NavBar />
              <main id="main">
              <Switch  >
                <Route exact path="/" component={HomePage} />
                <Suspense fallback="">
                <Route exact path="/cause" render={(props) => <CauseHomePage/>} />
                <Route exact path="/cause/:slug" render={(props) => <CausePage/>} />
                <Route exact path="/board-page" render={(props) => <BoardPage/>} />
                <Route exact path="/about" render={(props) => <AboutHomePage/>} />
                </Suspense>
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
  ReactGA.initialize('UA-132415809-3')
  // ReactGA.initialize('UA-132349651-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
});


export default App;