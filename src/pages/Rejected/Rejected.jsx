import React from "react";
import { DashPage } from "../../components";

function Rejected() {
  return (
    <div>
      <DashPage>
        <div
          className="pend"
          style={{
            width: "100vw",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div
            className="view"
            style={{
              width: "40%",
              height: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img
              src="./rejection.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <h3 style={{ textAlign: "center", color: "grey" }}>
              Sorry, Your Request has not been Accepted
            </h3>
          </div>
        </div>
      </DashPage>
    </div>
  );
}

export default Rejected;
