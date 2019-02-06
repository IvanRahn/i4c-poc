import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {NavBar, ErrorBoundary} from "./modules"
import HomePage from "./pages/HomePage/HomePage";
import GlobalStyle from "./Normalize";
const CauseHomePage = lazy(() => import("./pages/CausePage/CauseHomePage"))
const CausePage = lazy(() => import("./pages/SingleCausePage/CausePage"))
const BoardPage = lazy(() => import("./pages/OurBoardPage/BoardPage"))
const AboutHomePage = lazy(() => import("./pages/AboutPage/AboutHomePage")) 
const HowItWorksHomePage = lazy(() => import("./pages/HowItWorksPage/HowItWorksHomePage"))
const Footer = lazy(() => import("./modules/pageLayout/Footer"))


class App extends Component {

  componentDidMount() {}
  render() {

    return (
      <>
      <ErrorBoundary>
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
              <Suspense fallback=""> 
                <Footer />
              </Suspense>
              </>
            </BrowserRouter>
            </ErrorBoundary>
      </>
      );
  }

}
import("react-ga").then(ReactGA => {
  ReactGA.initialize('UA-132415809-3')
  ReactGA.pageview(window.location.pathname + window.location.search);
});


export default App;