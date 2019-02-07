import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {NavBar, ErrorBoundary, Loading} from "./modules"
import HomePage from "./pages/HomePage/HomePage";
import GlobalStyle from "./Normalize";
<<<<<<< HEAD
import GA from "./google_analytics/withTracker"
// const Redirect = lazy(() => import("./Redirect"));
=======
>>>>>>> 8462982e1e5d1a097c5f4ee8d0b1b93932ea143b
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

            <BrowserRouter >
            <>
              <NavBar />
              <main id="main">
              { GA.init() && <GA.RouteTracker /> }

                <Suspense fallback={<Loading/>}>
              <Switch  >
                <Route exact path="/" render={props => <HomePage {...props} />} />
                  <Route exact path="/cause" render={props => <CauseHomePage {...props} />} />
                  <Route exact path="/cause/:slug" render={(props) => <CausePage {...props}/>} />
                  <Route exact path="/board-page" render={(props) => <BoardPage {...props}/>} />
                  <Route exact path="/about" render={props => <AboutHomePage {...props} />}/> 
                  <Route exact path="/how-it-works" render={(props) => <HowItWorksHomePage {...props}/>} />
                  <Redirect path="*" to="/"/>
              </Switch>
                </Suspense>
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
// import("react-ga").then(ReactGA => {
//   ReactGA.initialize('UA-132415809-3')
//   ReactGA.pageview(window.location.pathname + window.location.search);
// });


export default App;