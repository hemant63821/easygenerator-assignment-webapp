import { Navigate, Routes } from "react-router-dom";
import { isLogin } from "./storage";

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = isLogin();
  console.log("check if authenticated", isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Routes>{children}</Routes>;
};

export default ProtectedRoute;
