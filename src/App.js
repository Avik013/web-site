import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App({ children }) {
  return (
    <>
      <Navbar titleName={children} />
    </>
  );
}

export default App;
