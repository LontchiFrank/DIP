import React from "react";
import { DashPage } from "../../components";
import Lottie from "react-lottie";
import animationData from "../../annimations/81133-waiting (1).json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function PendingView() {
  return (
    <DashPage>
      <div
        className="pend"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          className="view d-flex flex-column justify-content-center align-items-center"
          style={{ width: "60%", height: "70%" }}
        >
          <h3
            style={{
              textAlign: "center",
              color: "grey",
              fontWeight: "bolder",
              paddingTop: "2em",
            }}
          >
            Your Request is on Hold. A small token to be paid by all members who
            wants to use the system using either MTN Mobile Money . Pay
            10,000XAF to this number +237 6 70 21 27 26 and send a screenshot to
            this number +237 6 70 21 27 26 on whatsapp to confirm your
            transaction.
          </h3>

          <Lottie options={defaultOptions} height={400} width={"70%"} />
        </div>
      </div>
    </DashPage>
  );
}

export default PendingView;
