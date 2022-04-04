import React from "react";
import Fade from "react-reveal/Fade";

import styles from "../pages/Home/Home.module.css";

function Vision() {
  return (
    <div
      className="container-fluid mission pb-5"
      // style={{
      //   width: " 100%",
      //   height: "100%",
      //   backgroundColor: " rgba(179, 108, 255, 0.13)",
      //   paddingBottom: "5em",
      // }}
    >
      <div className="text-center pt-5 pb-5">
        <h2 style={{ fontWeight: "bold", color: "#222f3e" }}>Our Vision</h2>
      </div>
      <div className={` ${styles.vision} container  py-3 d-flex`}>
        <Fade left>
          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center pr-3">
            <div className="text-left">
              <h3 style={{ color: "#222f3e" }}>
                Raise impact oriented leaders driven by a strong culture of
                love, professionalism,leadership and team spirit in their
                domains of influence and especially network marketing to become
                game changers in a disruptive economy.
              </h3>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-lg-6 col-md-12 p-0">
            <div className="hold">
              <img
                src="/vis.jpg"
                alt=""
                style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Vision;
