import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from "./App/App";
import Courses from "./App/Components/Pages/Courses/Courses";
import ShoppingList from "./App/Components/Pages/ShoppingList/ShoppingList";
import Users from "./App/Components/Pages/Users/Users";

// import Example from "./App/Example";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Courses}/>
          <Route path="/shopping-list" component={ShoppingList}/>
          <Route path="/users" component={Users}/>
        </Switch>
      </App>
    </Router>
    {/* <Example/> */}
  </React.StrictMode>,
  document.getElementById("root")
);
