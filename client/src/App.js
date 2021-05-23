import React from "react";
import "App.css";
import imagen from "./assets/reading-book.svg";

const App = () => (
  <div>
    <h1 className="title">Hello React!!!</h1>
    <img src={imagen} alt="imagen" />
  </div>
);

export default App;
