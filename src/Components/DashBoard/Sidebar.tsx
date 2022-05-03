import React from "react";
import "../../App.css";
import { useMoralis } from "react-moralis";
import {
  BsPlus,
  BsFillLightningFill,
  BsGearFill,
  BsUpload,
  BsFillCalendar3WeekFill,
  BsFillDiagram3Fill,
  BsFillRssFill,
  BsArrowBarRight,
} from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  const { logout } = useMoralis();

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };
  return (
    <div
      className=" left-0 h-auto w-16 flex flex-col
                   bg-primary shadow-lg"
    >
      <SideBarIcon icon={<FaFire size="28" />} />
      <Divider />
      <SideBarIcon icon={<BsFillCalendar3WeekFill size="32" />} />
      <SideBarIcon icon={<BsUpload size="20" />} />
      <SideBarIcon icon={<BsFillDiagram3Fill size="20" />} />
      <SideBarIcon icon={<BsFillRssFill size="20" />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} />
      <Divider />
      <button onClick={logOut} className="sidebar-icon">
        <BsArrowBarRight size="20" />
      </button>
    </div>
  );
};

const SideBarIcon = (
  { icon }: { icon: any },
  { onClick }: { onClick: any }
) => {
  return <div className="sidebar-icon group">{icon}</div>;
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;

export { Divider, SideBarIcon };
