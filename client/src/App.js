import React from "react";
import "./assets/styles/App.scss";
import logo from "./assets/static/reading-book.svg";

const App = () => (
  <>
    <header className="navbar">
      <img src={logo} alt="imagen" />
      <h3>My Readings</h3>
    </header>
    <main className="main" id="main">
      <div className="container">
        <h1 className="main__title">My Readings List</h1>
      </div>
    </main>
    <footer className="footer">
      <p>2021 - Coded with ♥ by Cynthia Romero</p>
    </footer>
  </>
);

export default App;
