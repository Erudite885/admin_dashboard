import React from "react";
import { App, Expand, NoAvatar, Notifications, Search, Settings, logoIcon } from "../../assets/index";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoIcon} alt="logo icon" />
        <span>Admin</span>
      </div>
      <div className="icons">
        <img src={Search} alt="search icon" />
        <img src={App} alt="app icon" />
        <img src={Expand} alt="expand icon" />
        <div className="notification">
          <img src={Notifications} alt="notification icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img src={NoAvatar} alt="user icon" />
          <span>Jane</span>
        </div>
        <img src={Settings} alt="settings icon" />
      </div>
    </div>
  );
};

export default Navbar;
