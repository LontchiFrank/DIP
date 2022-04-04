import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, useNavigate } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";

const PrivateRoute = ({ component: Component, roles, route, ...rest }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const userHasRequiredRole = roles.includes(user.user.role);

  if (user.isAuthenticated && user.user.role == "user") {
    return <Component />;
  }
  //  else if (userHasRequiredRole && route == "/user") {
  //   return <NotFound msg={"Oops you can't access this page"} />;
  // }
  if (user.isAuthenticated && user.user.role == "admin") {
    return <Component />;
  }
  // else if (route == "/dashboard") {
  //   return <NotFound msg={"Oops you can't access this page"} />;
  // }

  if (user.isAuthenticated && !userHasRequiredRole && route == "/users") {
    return <NotFound msg={"Oops you can't access this page"} />;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
