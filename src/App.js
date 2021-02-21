import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default App;
