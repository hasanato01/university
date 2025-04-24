import React from "react";
import AuthHook from "../../controllers/auth-hook";

const SignUp = ({ setIsSignUp }) => {
  const { handleSignUp, handleSignUpChange, signUpIsLoading, signUpError } =
    AuthHook();

  return (
    <div>
      <p className="fs-4 fw-bold py-3">إنشاء حساب</p>
      <div className="input-group">
        <input
          className="form-control m-2"
          type="text"
          placeholder="الاسم الأول"
          name="userInfo.name"
          onChange={handleSignUpChange}
          required
        />
        <input
          className="form-control m-2"
          type="text"
          placeholder="الكنية"
          name="userInfo.surename"
          onChange={handleSignUpChange}
          required
        />
      </div>
      <input
        className="form-control my-2 m-2"
        type="text"
        placeholder="البريد الإلكتروني"
        name="email"
        onChange={handleSignUpChange}
        required
      />

      <button
        onClick={handleSignUp}
        className="btn btn-success my-2"
        disabled={signUpIsLoading}>
        {signUpIsLoading ? "جارِ إنشاء الحساب..." : "إنشاء الحساب"}
      </button>
      {signUpError && (
        <p className="text-danger mt-2">{signUpError?.data?.message}</p>
      )}
      <br />
      <span
        onClick={() => setIsSignUp(false)}
        className="text-primary mt-3"
        style={{ cursor: "pointer" }}>
        لديك حساب بالفعل؟ سجل الدخول
      </span>
    </div>
  );
};

export default SignUp;
