import React, { useEffect } from "react";
import { DashPage, AccessToFree } from "../../components";
import styles from "./Dashboard.module.css";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  _loadeCurrentlyLogedInUser,
  _userRequestFreePlan,
  _userRequestPremiumPlan,
} from "../../Helpers/userHelper";
import { loadUser } from "../../redux/actions/userAction";
import PendingView from "../../pages/PendingView/PendingView";
import Premium from "../../components/Premium/Premium";
import Rejected from "../Rejected/Rejected";
import { Online, Offline } from "react-detect-offline";
import Network from "../../components/Network/Network";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header className="mheader" closeButton>
        <div className="contain" style={{ width: "80px", height: "80px" }}>
          <img src="/8.png" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
      </Modal.Header> */}
      <Modal.Body>
        <div className="containt d-flex">
          <h4>Request sent and Pending</h4>{" "}
          <i
            class="fas fa-check-double pt-2 pl-2"
            style={{ color: "#009717" }}
          ></i>
        </div>
        <p>
          Request Sent, But you need to wait for the Admin to grant you access!
          For you to enjoy the free Plan!
        </p>
      </Modal.Body>
    </Modal>
  );
}

function Dashboard() {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = React.useState(true);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
  }, []);
  // useEffect(() => {
  //   console.log(user.user.isRequestingAccess, "changed");
  // }, [user.user]);

  const sendFreePlanUpgrade = () => {
    _userRequestFreePlan().then((response) => {
      _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
    });
  };

  const sendPremiumUpgrade = () => {
    _userRequestPremiumPlan().then((response) => {
      _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
    });
  };
  return (
    <div>
      {user.user !== null && user.user.plan === "premium" && <Premium />}

      {user.user !== null &&
        user.user.plan === "free" &&
        (user.user.isRequestingAccess === true ||
          user.user.isRequestingAccess === false) && <AccessToFree />}

      {user.user !== null &&
        user.user.isRequestingAccess === true &&
        user.user.plan === "none" && <PendingView />}

      {user.user !== null &&
        user.user.isRequestingAccess === false &&
        user.user.plan === "none" && (
          <DashPage>
            <div className={`${styles.main1} row whole pt-5 pb-5 d-flex `}>
              <div
                className="col-lg-4 col-md-12 col-sm-12 "
                style={{
                  borderRadius: "10px",
                  border: "3px solid #009717",
                }}
              >
                <div className="text-center pt-3">
                  <h1 style={{ color: "#0360AF" }}>BASIC</h1>
                  <h4 style={{ color: "#008514" }}>PLAN</h4>
                  <div className="pt-2">
                    <div className="plan-1 d-flex" style={{ gap: "10px" }}>
                      <i
                        class="fas fa-check-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>Customized training</p>
                    </div>
                    <div className="plan-1 d-flex" style={{ gap: "10px" }}>
                      <i
                        class="fas fa-check-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>
                        Health/Business presentation (pictures,videos and
                        write-ups)
                      </p>
                    </div>
                    <div className="plan-1 d-flex" style={{ gap: "10px" }}>
                      <i
                        class="fas fa-times-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>
                        Inspirational training (pictures,videos and write-ups)
                      </p>
                    </div>

                    <div className="plan-1 d-flex" style={{ gap: "10px" }}>
                      <i
                        class="fas fa-times-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>Rebirth Conference (pictures,videos and write-ups)</p>
                    </div>
                    <div className="plan-1 d-flex" style={{ gap: "10px" }}>
                      <i
                        class="fas fa-check-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>
                        Executive leadership (pictures,videos and write-ups)
                      </p>
                    </div>
                    <div className="plan-1 d-flex" style={{ gap: "10px" }}>
                      <i
                        class="fas fa-times-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>DIP convention (pictures,videos and write-ups)</p>
                    </div>
                    <div className="plan-1 d-flex" style={{ gap: "10px" }}>
                      <i
                        class="fas fa-times-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>
                        Accelerator programs (pictures,videos and write-ups)
                      </p>
                    </div>
                    <div className="plan-1 d-flex" style={{ gap: "10px" }}>
                      <i
                        class="fas fa-times-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>30 days fast start (pictures,videos and write-ups)</p>
                    </div>
                    <div className="plan-1 d-flex" style={{ gap: "10px" }}>
                      <i
                        class="fas fa-times-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>
                        90 days leadership school (pictures,videos and
                        write-ups)
                      </p>
                    </div>
                    <div className="plan-1 d-flex" style={{ gap: "10px" }}>
                      <i
                        class="fas fa-times-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>
                        Launching your business in one month (pictures,videos
                        and write-ups)
                      </p>
                    </div>
                    <div className="plan-1 d-flex" style={{ gap: "10px" }}>
                      <i
                        class="fas fa-times-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>Bootcamp (pictures,videos and write-ups)</p>
                    </div>
                    <div className="plan-1 d-flex" style={{ gap: "10px" }}>
                      <i
                        class="fas fa-times-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>Masterminds (pictures,videos and write-ups)</p>
                    </div>
                    <div class="col-12 pb-3">
                      <button
                        type="submit"
                        className="col-12 btn btn-success "
                        onClick={sendFreePlanUpgrade}
                      >
                        Request Access
                      </button>
                    </div>
                  </div>{" "}
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12"
                style={{
                  borderRadius: "10px",
                  border: "3px solid #005FB0",
                }}
              >
                <div className="text-center pt-3">
                  <h1 style={{ color: " #008514" }}>PREMIUM</h1>
                  <h4 style={{ color: "#0360AF" }}>PLAN</h4>
                  <div className="pt-2">
                    <div
                      className="plan-1 d-flex flex-column"
                      // style={{ gap: "10px" }}
                    >
                      <div className="d-flex">
                        {" "}
                        <i
                          class="fas fa-check-circle pt-1"
                          style={{ color: "#747170" }}
                        ></i>
                        <p>Courses</p>
                      </div>
                      <div className="plan-1 d-flex " style={{ gap: "10px" }}>
                        <i
                          class="fas fa-times-circle pt-1"
                          style={{ color: "#747170" }}
                        ></i>
                        <p>
                          Penetration strategies, Basic team building, Advance
                          team building
                        </p>
                      </div>
                      <div className="plan-1 d-flex " style={{ gap: "10px" }}>
                        <i
                          class="fas fa-times-circle pt-1"
                          style={{ color: "#747170" }}
                        ></i>
                        <p>
                          Responsible leadership, How to launch your business
                        </p>
                      </div>
                    </div>
                    <div className="plan-1 d-flex flex-column">
                      <div className="d-flex">
                        {" "}
                        <i
                          class="fas fa-check-circle pt-1"
                          style={{ color: "#747170" }}
                        ></i>
                        <p>System fundamentals</p>
                      </div>
                      <div className="d-flex">
                        {" "}
                        <i
                          class="fas fa-check-circle pt-1"
                          style={{ color: "#747170" }}
                        ></i>
                        <p>Love, professionalism, Sacrifice</p>
                      </div>
                      <div className="d-flex">
                        {" "}
                        <i
                          class="fas fa-check-circle pt-1"
                          style={{ color: "#747170" }}
                        ></i>
                        <p>Leadership , TeamWork</p>
                      </div>
                    </div>
                    <div className="plan-1 d-flex " style={{ gap: "10px" }}>
                      <i
                        class="fas fa-times-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>System Building Blocks</p>
                    </div>

                    <div className="plan-1 d-flex " style={{ gap: "10px" }}>
                      <i
                        class="fas fa-times-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>Advance Certification program</p>
                    </div>
                    <div className="plan-1 d-flex " style={{ gap: "10px" }}>
                      <i
                        class="fas fa-check-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>DIP coaching certification</p>
                    </div>
                    <div className="plan-1 d-flex " style={{ gap: "10px" }}>
                      <i
                        class="fas fa-times-circle pt-1"
                        style={{ color: "#747170" }}
                      ></i>
                      <p>DIP Mentor Certificate</p>
                    </div>
                    <div class="col-12 pb-3" style={{ paddingTop: "8em" }}>
                      <button
                        type="submit"
                        className="col-12 btn btn-primary"
                        onClick={sendPremiumUpgrade}
                      >
                        Request Access
                      </button>
                    </div>
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </DashPage>
        )}
      {user.user === null && (
        <div className={`containerCenter spinnerContainer`}>
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

// const DashBoardDefault = () => {
//   return (

//   );
// };
