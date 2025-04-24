import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { BASE_URL, LOGIN_EP, SIGNUP_EP } from "../GlobalData.js";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("Token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: (logInData) => ({
        url: `${LOGIN_EP}`,
        method: "POST",
        body: logInData,
      }),
      invalidatesTags: ["Auth"],
    }),
    signUp: builder.mutation({
      query: (signUpData) => ({
        url: `${SIGNUP_EP}`,
        method: "POST",
        body: signUpData,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLogInMutation, useSignUpMutation } = authApi;
