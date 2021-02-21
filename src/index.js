import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Courses from "./Pages/Courses/Courses";
import Users from "./Pages/Users/Users";
import "./index.css";

// import {Lesson, Counter, Button} from "./React/Props2/LessonProps2";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/" component={Courses} />
        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
