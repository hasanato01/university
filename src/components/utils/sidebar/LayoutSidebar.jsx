import React, { useCallback, useState } from "react";
import logo from "../../../img/logo.png";
import "./LayoutSidebar.css";
import {
  Clipboard2Check,
  FileEarmarkText,
  HouseDoor,
  Mortarboard,
  PersonCircle,
} from "react-bootstrap-icons";

const LayoutSidebar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <div>
      <div id="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <h4 className="app-title">University</h4>
          <p className="app-sub-title">Registration</p>
        </div>
      </div>

      <ul className="side-bar-items">
        <li onClick={() => handleTabClick("home")}>
          <HouseDoor
            className={activeTab === "home" ? `primary-color` : `text-color`}
            size={24}
          />
          <span
            className={`side-bar-item ${
              activeTab === "home" ? `dark-color` : `text-color`
            }`}>
            Home
          </span>
        </li>

        <li onClick={() => handleTabClick("myregistration")}>
          <Mortarboard
            className={
              activeTab === "myregistration" ? `primary-color` : `text-color`
            }
            size={24}
          />
          <span
            className={`side-bar-item ${
              activeTab === "myregistration" ? `dark-color` : `text-color`
            }`}>
            My Registration
          </span>
        </li>

        <li onClick={() => handleTabClick("register")}>
          <Clipboard2Check
            className={
              activeTab === "register" ? `primary-color` : `text-color`
            }
            size={24}
          />
          <span
            className={`side-bar-item ${
              activeTab === "register" ? `dark-color` : `text-color`
            }`}>
            Register
          </span>
        </li>

        <li onClick={() => handleTabClick("prcedures")}>
          <FileEarmarkText
            className={
              activeTab === "prcedures" ? `primary-color` : `text-color`
            }
            size={24}
          />
          <span
            className={`side-bar-item ${
              activeTab === "prcedures" ? `dark-color` : `text-color`
            }`}>
            Procedures
          </span>
        </li>

        <li onClick={() => handleTabClick("myprofile")}>
          <PersonCircle
            className={
              activeTab === "myprofile" ? `primary-color` : `text-color`
            }
            size={24}
          />
          <span
            className={`side-bar-item ${
              activeTab === "myprofile" ? `dark-color` : `text-color`
            }`}>
            My Profile
          </span>
        </li>
      </ul>
    </div>
  );
};
export default LayoutSidebar;
