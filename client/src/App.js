import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import {Col } from "./components/Grid";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <br></br>
        <Col size="md-12">
          <Jumbotron>
            <h1>(React) Google Book Search</h1>
            <p>Search for and Save book with interest</p>
          </Jumbotron>
        </Col>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
