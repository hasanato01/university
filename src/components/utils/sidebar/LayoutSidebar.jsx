import React, { useState } from "react";
import logo from "../../../img/logo.png";
import "./LayoutSidebar.css";
import {
  Clipboard2Check,
  FileEarmarkText,
  HouseDoor,
  Mortarboard,
  PersonCircle,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const LayoutSidebar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  return (
    <div className="sidebar d-flex flex-column">
      <div>
        <div className="logo mb-4">
          <img src={logo} alt="Logo UNLaM" />
          <div>
            <div className="logo-text">University</div>
            <div className="logo-subtext">Registration</div>
          </div>
        </div>

        <nav className="nav flex-column">
          <span
            className={`nav-link ${activeTab === "home" ? "active" : ""}`}
            onClick={() => handleTabClick("home")}>
            <HouseDoor /> Home
          </span>
          <span
            className={`nav-link ${
              activeTab === "myregistration" ? "active" : ""
            }`}
            onClick={() => handleTabClick("myregistration")}>
            <Mortarboard /> My registration
          </span>
          <span
            className={`nav-link ${
              activeTab === "registration" ? "active" : ""
            }`}
            onClick={() => handleTabClick("registration")}>
            <Clipboard2Check /> Registration
          </span>
          <span
            className={`nav-link ${activeTab === "terms" ? "active" : ""}`}
            onClick={() => handleTabClick("terms")}>
            <FileEarmarkText /> Terms
          </span>
          <span
            className={`nav-link ${activeTab === "myprofile" ? "active" : ""}`}
            onClick={() => handleTabClick("myprofile")}>
            <PersonCircle /> My profile
          </span>
        </nav>
      </div>

      <div className="logout">
        <span className="nav-link" onClick={() => setActiveTab("")}>
          <i className="bi bi-box-arrow-right"></i> Sign out
        </span>
      </div>
    </div>
  );
};
export default LayoutSidebar;
