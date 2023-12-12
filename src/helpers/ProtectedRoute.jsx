import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "./storage";

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = isLogin();
  console.log("check if authenticated", isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Fragment>{children}</Fragment>;
};

export default ProtectedRoute;
