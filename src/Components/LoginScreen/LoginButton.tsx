import React from "react";
import "../../App.css";
import { useMoralis } from "react-moralis";

function LoginButton() {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: "Log into Golem Secure",
        provider: "metamask",
        chainId: 80001,
      });
    }
  };

  return (
    <div>
      <button onClick={login} className="Enter-App-Button">
        LOGIN
      </button>
    </div>
  );
}

export default LoginButton;
