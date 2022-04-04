import React from "react";
import styles from "./SuperAdminLayout.module.css";
import {
  SuperAdminLeftNavigation,
  RightStatisticsSection,
  Unexpected,
} from "../../../components";
import { useSelector } from "react-redux";

function SuperAdminLayout({ children }) {
  const admin = useSelector((state) => state.admin);
  const { error } = admin;
  return (
    <div>
      {error !== null ? (
        <Unexpected />
      ) : (
        <div className={`${styles.container}`}>
          <SuperAdminLeftNavigation />
          <div className={styles.children}>{children}</div>
          <RightStatisticsSection />
        </div>
      )}
    </div>
  );
}

export default SuperAdminLayout;
