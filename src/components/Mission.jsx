import React from "react";
import Fade from "react-reveal/Fade";
import styles from "../pages/Home/Home.module.css";
// import "../pages/Home/Home.css";
function Mission() {
  return (
    <div
      className="capsule "
      style={{
        width: " 100%",
        height: "100%",
        backgroundColor: " rgba(179, 108, 255, 0.13)",
        paddingBottom: "5em",
      }}
    >
      <div className="container-fluid mission" style={{ marginBottom: "5em" }}>
        <div className="text-center pt-5 pb-3">
          <h2 style={{ fontWeight: "bold", color: "#222f3e" }}>Our Mission</h2>
        </div>
        <div className={` ${styles.mission} container  py-3 d-flex`}>
          <Fade top>
            <div className="col-lg-6 col-md-12 p-0">
              <div className="hold d-flex justify-content-center align-items-center">
                <img
                  src="/mis.jpg"
                  alt=""
                  style={{
                    width: "90%",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
              <div className="text-left">
                <h3 style={{ color: "#222f3e" }}>
                  Our mission is to professionally equip our members through a
                  proven modern support system to excel in their various
                  industries and network marketing in particular.
                </h3>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Mission;
