import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {NavBar} from "./modules"
import HomePage from "./pages/HomePage/HomePage";
// import CauseHomePage from "./pages/CausePage/CauseHomePage";
// import CausePage from "./pages/CausePage/CausePage";
import GlobalStyle from "./Normalize";
// import BoardPage from "./pages/OurBoard/BoardPage";
// import AboutHomePage from "./pages/AboutPage/AboutHomePage";
// import {detect } from "detect-browser";
const CauseHomePage = lazy(() => import("./pages/CausePage/CauseHomePage"))
const CausePage = lazy(() => import("./pages/CausePage/CausePage"))
const BoardPage = lazy(() => import("./pages/OurBoardPage/BoardPage"))
const AboutHomePage = lazy(() => import("./pages/AboutPage/AboutHomePage")) 
const HowItWorksHomePage = lazy(() => import("./pages/HowItWorksPage/HowItWorksHomePage"))
const Footer = lazy(() => import("./modules/Footer"))


// const browser = detect();
// const browsers = {
//     'chrome' : 68,
//     'firefox' : 52,
//     'safari': 10,
//     'edge': 16,
//     'ie' : 10,
// }
class App extends Component {

  componentDidMount() {}
  render() {

    // if (browser && 
    //   ((browsers.hasOwnProperty(browser.name) && Number(browser.version.split('.')[0]) <= browsers[`${browser.name}`]) || 
    //   !browsers.hasOwnProperty(browser.name)))  {
    //   alert("It seems like the browser you are using is out of date and some of the features of our website might not be supproted. Please consider upgrading to a newer version.")
    // }
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
                  <Route exact path="/cause" render={(props) => <CauseHomePage {...props}/>} />
                  <Route exact path="/cause/:slug" render={(props) => <CausePage {...props}/>} />
                  <Route exact path="/board-page" render={(props) => <BoardPage {...props}/>} />
                  <Route exact path="/about" render={(props) => <AboutHomePage {...props}/>} /> 
                  <Route exact path="/how-it-works" render={(props) => <HowItWorksHomePage {...props}/>} />
                </Suspense>
              </Switch>
              </main>
              <Suspense fallback=""> */}
                <Footer />
              </Suspense>
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