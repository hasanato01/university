import React from "react";
import logo from "../../img/logo.png";
import "./Login.css";
import AuthHook from "../../controllers/auth-hook";
import SignUp from "./SignUp";

const Login = () => {
  const {
    handleLogIn,
    handleLogInChange,
    setIsSignUp,
    logInIsLoading,
    logInError,
    isSignUp,
  } = AuthHook();

  return (
    <div
      className="background login-container row container-fluid"
      style={{ height: "100vh" }}>
      <div className="overlay" />
      <div className="text-center">
        <img width={150} height={150} src={logo} alt="Syria" />
      </div>
      <div className="text-center">
        <div className="login-form">
          {!isSignUp ? (
            <>
              <p className="fs-4 fw-bold py-3">تسجيل الدخول</p>
              <input
                className="form-control my-2"
                type="text"
                placeholder="اسم المستخدم"
                name="email"
                onChange={handleLogInChange}
                required
              />
              <div className="input-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="كلمة المرور"
                  name="password"
                  onChange={handleLogInChange}
                  required
                />
                <input
                  className="form-check-input my-auto"
                  style={{ height: "38px" }}
                  type="checkbox"
                  placeholder="كلمة المرور"
                />
              </div>
              <button
                onClick={handleLogIn}
                className="btn btn-success my-2"
                disabled={logInIsLoading}>
                {logInIsLoading ? "جارِ تسجيل الدخول..." : "تسجيل الدخول"}
              </button>
              {logInError && (
                <p className="text-danger mt-2">{logInError?.data?.message}</p>
              )}
              <br />
              <span
                onClick={() => setIsSignUp(true)}
                className="text-primary mt-3"
                style={{ cursor: "pointer" }}>
                ليس لديك حساب؟ أنشئ حسابًا
              </span>
            </>
          ) : (
            <SignUp setIsSignUp={setIsSignUp} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
