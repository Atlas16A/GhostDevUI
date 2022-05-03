import React from "react";
import "../../App.css";
import { useMoralis } from "react-moralis";
import LoginButton from "./LoginButton";
import logo from "../Resources/GHOST.png";

function LoginScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Monitize Your Golem Tasks</p>
        <LoginButton />
      </header>
    </div>
  );
}

export default LoginScreen;
