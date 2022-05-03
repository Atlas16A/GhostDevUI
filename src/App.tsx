import React from "react";
import "./App.css";
import { MoralisProvider, useMoralis, useMoralisWeb3Api } from "react-moralis";
import DashBoard from "./Components/DashBoard/DashBoard";
import LoginScreen from "./Components/LoginScreen/LoginScreen";

function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const web3Api = useMoralisWeb3Api();

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  if (user === null) {
    return <div>Loading...</div>;
  } else {
    return <DashBoard />;
  }
}

export default App;
