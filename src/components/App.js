import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import CauseHomePage from "./pages/CausePage/CauseHomePage";
import CausePage from "./pages/CausePage/CausePage";
import GlobalStyle from "./Normalize";
import BoardPage from "./pages/OurBoard/BoardPage"; 

class App extends Component {


  render() {
    console.log("Cause: ", this.props)
    return (
      <>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>

              <Route exact path="/" render={props => <HomePage {...props}/>} />
              <Route exact path="/cause" render={props => <CauseHomeage {...props}/>} />
              <Route exact path="/cause/:slug" render= {props =><CausePage {...props}/>} />
              <Route exact path="/board-page" render={props => <BoardPage {...props}/>} />

            </Switch>
          </BrowserRouter>
      </>
      );
  }

}
import("react-ga").then(ReactGA => {
  ReactGA.initialize('UA-132415809-3')
});


export default App;