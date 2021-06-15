/** @format */

import React from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import PlayList from "./components/PlayList";
import ItemDetail from "./components/ItemDetail";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/playlist" exact component={PlayList} />
          <Route path="/playlist/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
