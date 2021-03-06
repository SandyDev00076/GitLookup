import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "components/Home";
import Search from "components/Search";
import UserDetails from "components/UserDetails";
import PageNotFound from "components/PageNotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:username">
          <UserDetails />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
