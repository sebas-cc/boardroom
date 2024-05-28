import React from "react";
import "./Navbar.css";
import imageNotFound from "../../assets/imageNotFound.png";
import messages from "../../assets/messages.png";
import notifications from "../../assets/notifications.png";

const Navbar = () => {
  let profilePhoto;
  return (
    <div id="Navbar">
      <div id="setting_phone">
        <input type="checkbox" title="menu" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#">
            <li>Notifications</li>
          </a>
          <a href="#">
            <li>Messages</li>
          </a>
        </ul>
      </div>
      <div id="settings_desktop">
        <img src={notifications} alt="notifications"></img>
        <img src={messages} alt="messages"></img>
      </div>
      <img
        src={profilePhoto ? profilePhoto : imageNotFound}
        alt="user_photo"
      ></img>
    </div>
  );
};

export default Navbar;
