import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/home";
import Names from "./pages/names";
import Todos from "./pages/todos";

import MainNavigation from "./components/MainNavigation";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNavigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/names" component={Names} />
          <Route path="/todos" component={Todos} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
