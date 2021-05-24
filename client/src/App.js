import React from "react";
import "./assets/styles/App.scss";
import imagen from "./assets/static/reading-book.svg";

const App = () => (
  <div>
    <h1 className="title">Hello React!!!</h1>
    <img src={imagen} alt="imagen" />
  </div>
);

export default App;
