import React from "react";
import "./DashBoard.css";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import Sidebar from "./Sidebar";
import DevScriptModal from "./DevScriptModal";
import TopBar from "./TopBar";

function DashBoard() {
  const { user } = useMoralis();

  if (user === null) {
    return <div>Loading...</div>;
  } else {
    if (user.createdAt === user.updatedAt) {
      return <div>Welcome</div>;
    }
    return (
      <div className="dashboard bg-primary">
        <div className="Content bg-tertiary shadow-inner">
          <DevScriptModal />
        </div>
        <div className="SideBar">
          <Sidebar />
        </div>
        <div className="TopBar bg-tertiary m-2">
          <TopBar />
        </div>
      </div>
    );
  }
}

export default DashBoard;
