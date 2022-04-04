import React from "react";
import { MyFree } from "../../components";
import styles from "../NotFound/NotFound.module.css";
function NotFound({ msg }) {
  return (
    // <MyFree>
    <div
      className={`${styles.notfound} d-flex flex-column justify-content-center align-items-center`}
    >
      <h3 style={{ color: "#7B7B7B" }} className="pt-3">
        Page Not Found
      </h3>
      <div className={`${styles.notimage}`}>
        <img src="/not.png" alt="" style={{ width: "80%", height: "90%" }} />
      </div>
    </div>
    // </MyFree>
  );
}

export default NotFound;
