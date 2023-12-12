import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("credentials") ? (
        <Component {...props} />
      ) : (
        <Navigate to="/login" />
      )
    }
  />
);

export default PrivateRoute;
