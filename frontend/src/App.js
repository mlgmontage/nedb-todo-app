import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div role="main" className="container">
          <Route exact path="/" component={Home} />
          <Route path="/notes" component={Notes} />
          <Route path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
