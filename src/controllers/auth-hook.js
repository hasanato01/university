import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "react-toastify";
import { useLogInMutation, useSignUpMutation } from "../RTK/Api/AuthApi";

const AuthHook = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  // State for SignIn & SignUp
  const [logInFormData, setLogInFormData] = useState({});
  const [signUpFormData, setSignUpFormData] = useState({});

  // Login Mutation
  const [logIn, { isLoading: logInIsLoading, error: logInError }] =
    useLogInMutation();

  // Signup Mutation
  const [signUp, { isLoading: signUpIsLoading, error: signUpError }] =
    useSignUpMutation();

  // Handle Login
  const handleLogIn = async () => {
    try {
      const response = await logIn(logInFormData).unwrap();
      handleAuthSuccess(response);
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error?.data?.message || "Login failed!");
    }
  };

  // Handle Signup
  const handleSignUp = async () => {
    try {
      const response = await signUp(signUpFormData).unwrap();
      handleAuthSuccess(response);
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error?.data?.message || "Signup failed!");
    }
  };

  // Store token and user info on successful login/signup
  const handleAuthSuccess = (data) => {
    if (data?.token) {
      Cookies.set("Token", data.token, { expires: 7 });
      Cookies.set("userData", JSON.stringify(data?.data || {}), { expires: 7 });
      navigate("/"); // Navigate to home after successful auth
      toast.success("Authentication successful!");

      window.location.reload();
    }
  };

  // Set Login Form Data
  const handleLogInChange = (e) => {
    setLogInFormData({ ...logInFormData, [e.target.name]: e.target.value });
  };

  // Set Signup Form Data
  const handleSignUpChange = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  };

  return {
    handleLogIn,
    handleSignUp,
    handleLogInChange,
    handleSignUpChange,
    setIsSignUp,
    logInIsLoading,
    logInError,
    signUpIsLoading,
    signUpError,
    isSignUp,
  };
};

export default AuthHook;
