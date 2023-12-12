import React from "react";
import { Navigate, Route } from "react-router-dom";
import { isLogin } from "../helpers/storage";

const SecuredRoute = ({ element: Element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isLogin() ? <Element {...rest} /> : <Navigate to="/login" />}
    />
  );
};

export default SecuredRoute;
