import React from "react";
import { MyPage } from "../../components";
import styles from "./Testimony.module.css";
function Testimony() {
  return (
    <MyPage>
      <div className={`${styles.test}`}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%", width: "100%" }}
        >
          <h2
            style={{
              paddingBottom: "4em",
              fontSize: "6em",
              fontWeight: "bolder",
              color: "white",
            }}
          >
            Our Testimony
          </h2>
        </div>
      </div>
    </MyPage>
  );
}

export default Testimony;
