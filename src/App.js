import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Table from "./Pages/About";
function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Table">Table</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path="/Table" component={Table} />
        <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
