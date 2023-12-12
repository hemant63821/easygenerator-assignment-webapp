import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../containers/Login";

// const wrappedRoutes = () => (
//   <Fragment>
//     <Header></Header>
//     <div className="App">
//       <Route exact path="/users" component={UserDashboard} />
//     </div>
//     <Footer></Footer>
//   </Fragment>
// );

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default AppRoutes;
