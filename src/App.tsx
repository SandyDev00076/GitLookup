import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "components/Home";
import Search from "components/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
