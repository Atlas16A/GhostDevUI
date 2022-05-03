import React from "react";
import { useMoralis } from "react-moralis";
import "../DashBoard";

function LogoutButton() {
  const { logout } = useMoralis();

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <div>
      <button onClick={logOut} className=" bg-tertiary box-content rounded-sm">
        LOGOUT
      </button>
    </div>
  );
}

export default LogoutButton;
