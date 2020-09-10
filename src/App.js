import React from "react";
import "./css/App.css";
import MyNav from "./components/MyNav";
import TeamsPage from "./components/TeamsPage";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { Route, Switch } from "react-router-dom";
import NoAllyPage from "./components/NoAllyPage";

function App() {
  return (
    <div>
      <MyNav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/results" component={TeamsPage} />
        <Route path="/noally" component={NoAllyPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
