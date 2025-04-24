import React, { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const userData = JSON.parse(Cookies.get("userData") || "{}");
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate();
  const onLogout = () => {
    Cookies.remove("userData");
    navigation("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar p-3 bg-light">
      <div className="container-fluid justify-content-between">
        <form className="d-flex" role="search">
          <input className="form-control" type="search" placeholder="البحث" />
        </form>

        <div className="position-relative">
          <div
            className="d-flex align-items-center gap-2 p-2 bg-white rounded border cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}>
            <ChevronDown
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
            <span>{userData?.userInfo?.name || "User"}</span>
          </div>
          {isOpen && (
            <div className="position-absolute top-100 start-0 mt-2 w-48 bg-white shadow-lg rounded border">
              <ul className="list-unstyled m-0 p-2">
                <li
                  className="p-2 d-flex align-items-center gap-2 cursor-pointer text-danger hover-bg-light"
                  onClick={onLogout}
                  style={{ cursor: "pointer" }}>
                  تسجيل الخروج
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
