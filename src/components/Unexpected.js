import React from "react";
import { useSelector } from "react-redux";
import styles from "../pages/NotFound/NotFound.module.css";

function Unexpected() {
  const data = useSelector((state) => state.admin);
  const { error } = data;
  return (
    <div
      className={`${styles.notfound} d-flex flex-column justify-content-center align-items-center`}
    >
      <h3 style={{ color: "#7B7B7B" }} className="pt-3">
        {error}!!
      </h3>
      <div className={`${styles.notimage}`}>
        <img src="/not.png" alt="" style={{ width: "80%", height: "90%" }} />
      </div>
    </div>
  );
}

export default Unexpected;
