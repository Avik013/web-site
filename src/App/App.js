import React from "react";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";

const App = ({children}) => {
  return (
    <div className="App">
      <Navbar/>
      {children}
    </div>
  )
}

export default App;
