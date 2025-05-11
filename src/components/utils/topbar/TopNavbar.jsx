import React, { useState } from "react";
import Cookies from "js-cookie";
import "./TopNavbar.css";
import { useNavigate } from "react-router-dom";
import { Bell, Gear, Search } from "react-bootstrap-icons";

const TopNavbar = () => {
  const userData = JSON.parse(Cookies.get("userData") || "{}");
  const [name, setName] = useState("Abdulrahman");
  const navigation = useNavigate();
  const onLogout = () => {
    Cookies.remove("userData");
    navigation("/login");
    window.location.reload();
  };

  return (
    <div className="custom-container">
      <div className="d-flex align-items-center">
        <img
          width={48}
          src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-1024.png"
          alt="Person"
        />
        <p className="m-0 p-0">
          Hello, <b>{name}</b> 👋
        </p>
      </div>
      <div className="d-flex align-items-center">
        <Search className="topbar-icon" />
        <Bell className="topbar-icon" />
        <Gear className="topbar-icon" />
      </div>
    </div>
  );
};

export default TopNavbar;
