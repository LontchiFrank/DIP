import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registeration from "./pages/Registeration/Registeration";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <div className="App">{children}</div>;
}

function Navigation() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Registeration />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Navigation;
