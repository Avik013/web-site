import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App/App";
import Courses from "./App/Components/Pages/Courses/Courses";
import ShoppingList from "./App/Components/Pages/ShoppingList/ShoppingList";
import Users from "./App/Components/Pages/Users/Users";

// import Example from "./App/Example";

import "./index.css";

const routeAttributes = [
  {
    path: "/",
    component: Courses
  },
  {
    path: "/shopping-list",
    component: ShoppingList
  },
  {
    path: "/users",
    component: Users
  }
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Switch>
          {routeAttributes.map((item, index) => (
            <Route
              exact
              key={item.path + "-" + index}
              path={item.path}
              component={item.component}
            />
          ))}
        </Switch>
      </App>
    </Router>
    {/* <Example/> */}
  </React.StrictMode>,
  document.getElementById("root")
);
