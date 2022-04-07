import React, { useState, useEffect } from "react";
import styles from "./LeftNavigationBar.module.css";
import { ICON_DATA_SET } from "../../../SUPERDATA";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../../redux/actions/adminAction";
import { useDispatch } from "react-redux";
import head from "../../../assets/head.png";

function SuperAdminLeftNavigation() {
  const location = useLocation();
  const dispatch = useDispatch();

  const [currentPath, setCurrentPath] = useState();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, []);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={`containerColumn ${styles.container}`}>
      <div>
        <img src={head} width="70" alt="logo" />
      </div>
      <div className={`containerColumn ${styles.iconContainer}`}>
        {ICON_DATA_SET.map((icon, index) => (
          <Link to={icon.path} key={icon.name}>
            <i
              className={`icon ${icon.name}  ${
                icon.path === currentPath
                  ? `${styles.isActive}`
                  : `${styles.notActive}`
              }`}
            ></i>
          </Link>
        ))}
      </div>
      <div onClick={onLogout}>
        <i className={`fas fa-sign-out-alt fa-2x ${styles.logout} icon`}></i>
      </div>
    </div>
  );
}

export default SuperAdminLeftNavigation;
