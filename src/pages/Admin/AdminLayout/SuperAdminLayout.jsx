import React, { useState, useEffect } from "react";
import styles from "./AdminLayout.module.css";
import {
  SuperLeftNavigation,
  RightStatisticsSection,
  Unexpected,
} from "../../../components";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function AdminLayout({ children }) {
  const user = useSelector((state) => state.user);
  const superadmin = useSelector((state) => state.superAdmins);
  const { error } = superadmin;
  console.log(error);
  return (
    <div>
      {user.user.role == "superadmin" ? (
        <div className={`${styles.container}`}>
          <SuperLeftNavigation />
          <div className={styles.children}>{children}</div>
          {/* <SuperRightStatisticsSection /> */}
          <SuperRightStatisticsSection />
        </div>
      ) : (
        <Unexpected />
      )}
    </div>
  );
}

export default AdminLayout;
v;
