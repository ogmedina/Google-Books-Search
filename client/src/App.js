import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navigation from "./components/Nav/index";
//import NoMatch from "./pages/NoMatch";
import "./App.css";

function App() {
  return (
    <Router>
    <>
    <Navigation />
    <Switch>
      <Route exact path = "/" component ={Search} />
      <Route exact patch = "/search" component = {Search} />
      <Route exact path = "/saved" compnent={Saved} />
      {/* <Route component={ NoMatch } /> */}
    </Switch>
    </>
    </Router>
  );
}


export default App;
