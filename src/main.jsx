import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./Pages/Welcomepage/WelcomePage";
import SignIn from "./Pages/SignInPage/SignIn";
import FirstPage from "./Pages/FirstPage/FirstPage";
import SignUp from "./Pages/SignUpPage/SignUp";
import ForgotPassword from "./Pages/ForgotPasswordPage/ForgotPw";
import VerificationPage from "./Pages/VerificationPage/VerificationPage";
import HomePage from "./Pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/firstpage",
    element: <FirstPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/signup/verificationpage/:email",
    element: <VerificationPage />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
