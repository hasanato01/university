import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import DashboardPages from "./pages/DashboardPages";
import LayoutSidebar from "./components/utils/sidebar/LayoutSidebar";
import TopNavbar from "./components/utils/topbar/TopNavbar";
import Login from "./components/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/*" element={<ProtectedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

function ProtectedRoutes() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const userData = Cookies.get("userData")
  //     ? JSON.parse(Cookies.get("userData"))
  //     : null;
  //   if (!userData || !userData.role) {
  //     navigate("/login", { replace: true });
  //   }
  // }, [navigate]);

  return <AppContent />;
}

function AppContent() {
  const userData = Cookies.get("userData")
    ? JSON.parse(Cookies.get("userData"))
    : {};

  return (
    <div className="row">
      <div className="d-flex" style={{ width: "14%" }}>
        <LayoutSidebar />
      </div>
      <div className="col-10" style={{ width: "86%" }}>
        <TopNavbar />
        <div className="col-12">
          <div id="content">
            <Routes>
              {/* {userData.role === "admin" && (
                <>
                  <Route path="/" element={<DashboardPages />} />
                </>
              )} */}
              {/* {userData.role === "user" && (
                <> */}
              <Route path="/myregistration" element={<DashboardPages />} />
              <Route path="/registration" element={<DashboardPages />} />
              <Route path="/terms" element={<DashboardPages />} />
              <Route path="/myprofile" element={<DashboardPages />} />
              {/* </>
              )} */}
              <Route path="*" element={<DashboardPages />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
