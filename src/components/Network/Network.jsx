import React from "react";
import Lottie from "react-lottie";
import animationData from "../../annimations/92811-server-error.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function Network() {
  return (
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
      <div className="view" style={{ width: "60%", height: "70%" }}>
        <h3 style={{ textAlign: "center", color: "grey" }}>
          Check Your Internet Connection
        </h3>

        <Lottie options={defaultOptions} height={400} width={"70%"} />
      </div>
    </div>
  );
}

export default Network;
