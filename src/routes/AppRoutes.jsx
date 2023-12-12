import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../containers/Login";
import WelcomePage from "../containers/WelcomePage/WelcomePage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/welcome" element={<WelcomePage />} />
  </Routes>
);

export default AppRoutes;
