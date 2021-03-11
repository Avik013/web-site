import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App/App";
import Courses from "./App/Components/Pages/Courses/Courses";
import ShoppingList from "./App/Components/Pages/ShoppingList/ShoppingList";
import Users from "./App/Components/Pages/Users/Users";

import "./index.css";

const routeAttributes = [
  {
    id: 0,
    path: "/",
    component: Courses
  },
  {
    id: 1,
    path: "/shopping-list",
    component: ShoppingList
  },
  {
    id: 2,
    path: "/users",
    component: Users
  }
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Switch>
          {routeAttributes.map(item => (
            <Route
              exact
              key={`${item}-${item.id}`}
              path={item.path}
              component={item.component}
            />
          ))}
        </Switch>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
