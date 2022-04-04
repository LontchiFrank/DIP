import React, { useState, useEffect } from "react";
import styles from "./AdminLayout.module.css";
import {
  LeftNavigationBar,
  RightStatisticsSection,
  Unexpected,
} from "../../../components";
import { useSelector } from "react-redux";

function AdminLayout({ children }) {
  const admin = useSelector((state) => state.admin);

  const [toggle, setToggle] = useState(false);
  const { error } = admin;
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("storage"));
    if (items !== null) {
      setToggle(true);
    }
  }, []);
  return (
    <div>
      {error !== null ? (
        <Unexpected />
      ) : (
        <div className={`${styles.container}`}>
          <LeftNavigationBar />
          <div className={styles.children}>{children}</div>
          <RightStatisticsSection rightSide={toggle} />
        </div>
      )}
    </div>
  );
}

export default AdminLayout;
