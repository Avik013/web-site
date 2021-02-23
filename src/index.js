import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Popular from "./Pages/Popular/Popular";
import Courses from "./Pages/Courses/Courses";
import Users from "./Pages/Customer/Customer";
import ShopingList from  "./Pages/ShoppingList/ShoppingList";
import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          {/* <Route path="/popular" component={Popular} /> */}
          <Route path="/shopping-list" component={ShopingList} />
          <Route path="/customer" component={Users} />
          <Route path="/" component={Courses} />
          
        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
