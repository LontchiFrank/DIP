import React, { useState, useEffect } from "react";
import styles from "./Registeration.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { registerUsers, isLoading } from "../../redux/actions/userAction";
import { _registerUser } from "../../Helpers/userHelper";
import Alert from "../../components/Alert/Alert";
import { Offline, Online } from "react-detect-offline";
import Network from "../../components/Network/Network";
import animationData from "../../annimations/5449-success-tick.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function Registeration() {
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);
  const [toggleEyePassword, setToggleEyePassword] = useState(false);
  const [toggleEyePassword1, setToggleEyePassword1] = useState(false);
  const [validationPassword, setValidationPassword] = useState(false);
  const [Length, setLength] = useState(false);
  const [err, setErr] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sponsorName: "",
    leadersName: "",
    password: "",
    password2: "",
  });

  const handletoggleEyePassword = () => {
    setToggleEyePassword(!toggleEyePassword);
  };
  const handletoggleEyePassword1 = () => {
    setToggleEyePassword1(!toggleEyePassword1);
  };
  const { name, email, sponsorName, leadersName, password, password2 } =
    formData;

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name == "name" && e.target.value.length == 18) {
      setLength(true);
    } else {
      setLength(false);
    }
  };
  const onsubmit = async (e) => {
    dispatch(isLoading(true));
    e.preventDefault();
    if (password !== password2) {
      setValidationPassword(true);
    } else {
      const data = { name, email, sponsorName, leadersName, password };
      _registerUser(data).then((response) => {
        if (response.code === 400) {
          console.log("i found an error");
          setErr(response.errorMessage);
        } else {
          dispatch(registerUsers(response));
          navigate("/dashboard");
        }
      });
    }
  };
  // console.log(user);
  // console.log(user.isAuthenticated);
  // if (user.isAuthenticated && user.user != null) {
  //
  // }
  return (
    <div className={`${styles.main}`}>
      <MyVerticallyCenteredModal show={modalShow} close={setModalShow} />
      <div className={styles.box}>
        <div className={`${styles.secondPart} col-lg-6`}>
          <div className="text-left pt-3 px-4">
            <h2 style={{ fontSize: "3em", color: "#281766" }}>SignUp</h2>
          </div>
          <div className="container">
            <div className="sap d-flex">
              <div className={`${styles.line} mt-4 ml-2`}></div>
              <p
                className=" mt-2 ml-2"
                style={{ color: "#bb2d00", fontWeight: "bold" }}
              >
                sign Up with
              </p>
            </div>
            <div className="formsap row d-flex justify-content-center align-items-center">
              <form class="row g-3 m-0 " onSubmit={(e) => onsubmit(e)}>
                <div className="col-md-6 m-0 mb-3">
                  <label for="validationCustom01" class="form-label fw-bold">
                    Name
                  </label>
                  <input
                    type="name"
                    className={`${styles.int} form-control`}
                    id="validationCustom01"
                    name="name"
                    value={name}
                    onChange={(e) => onchange(e)}
                    maxlength="12"
                    required
                  />

                  <span style={{ display: Length ? "block" : "none" }}>
                    <p
                      className="m-0 p-0"
                      style={{ color: "red", fontSize: "11px" }}
                    >
                      Not more than 12 characters
                    </p>
                  </span>
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div class="col-md-6 m-0 ">
                  <label for="inputEmail4" class="form-label fw-bold">
                    Email
                  </label>
                  <input
                    type="text"
                    className={`${styles.int} form-control`}
                    // id="inputEmail4"
                    name="email"
                    value={email}
                    onChange={(e) => onchange(e)}
                    required
                  />
                </div>
                <div class="col-md-12 m-0 mb-3">
                  <label for="inputEmail4" class="form-label fw-bold">
                    Sponor's Name
                  </label>
                  <input
                    type="text"
                    className={`${styles.int} form-control`}
                    id="inputName"
                    name="sponsorName"
                    value={sponsorName}
                    onChange={(e) => onchange(e)}
                    required
                  />
                </div>
                <div class="col-md-12 m-0 ">
                  <label for="inputName" class="form-label fw-bold">
                    Upline Leader's Name
                  </label>
                  <input
                    type="text"
                    className={`${styles.int} form-control`}
                    id="inputName"
                    name="leadersName"
                    value={leadersName}
                    onChange={(e) => onchange(e)}
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" className="form-label fw-bold">
                    Password
                  </label>
                  <div
                    className="inputPass "
                    style={{
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      border: validationPassword
                        ? "1px solid red"
                        : "1px solid #ced4da",
                      borderRadius: 4,
                    }}
                  >
                    <input
                      style={{
                        border: "none",
                        outline: "none",
                        borderStyle: "none",
                      }}
                      type={toggleEyePassword1 ? "text" : "password"}
                      className="form-control"
                      // id="inputPassword4"
                      name="password"
                      value={password}
                      onChange={(e) => onchange(e)}
                      required
                    />

                    <i
                      class={
                        toggleEyePassword1
                          ? "far fa-eye mr-2"
                          : "fas fa-eye-slash mr-2"
                      }
                      style={{ color: "#ccc", cursor: "pointer" }}
                      onClick={handletoggleEyePassword1}
                    ></i>
                  </div>
                </div>
                <div class="col-md-6 ">
                  <label for="inputPassword4" className="form-label fw-bold">
                    Confirm Password
                  </label>
                  <div
                    className="inputPass "
                    style={{
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      border: validationPassword
                        ? "1px solid red"
                        : "1px solid #ced4da",
                      borderRadius: 4,
                    }}
                  >
                    <input
                      style={{
                        border: "none",
                        outline: "none",
                        borderStyle: "none",
                      }}
                      type={toggleEyePassword ? "text" : "password"}
                      className="form-control"
                      id="inputPassword4"
                      name="password2"
                      value={password2}
                      onChange={(e) => onchange(e)}
                      required
                    />

                    <i
                      class={
                        toggleEyePassword
                          ? "far fa-eye mr-2"
                          : "fas fa-eye-slash mr-2"
                      }
                      style={{ color: "#ccc", cursor: "pointer" }}
                      onClick={handletoggleEyePassword}
                    ></i>
                  </div>
                  <span
                    style={{ display: validationPassword ? "block" : "none" }}
                  >
                    {" "}
                    <p
                      className="m-0 p-0"
                      style={{ color: "red", fontSize: "11px" }}
                    >
                      Password Does Not Match
                    </p>{" "}
                  </span>
                </div>
                <div class="col-12">
                  {user.Loading && err == null && validationPassword != true ? (
                    <div
                      className=" col-12 btn btn-primary "
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="spinner"></div>
                    </div>
                  ) : (
                    <button type="submit" className="col-12 btn btn-primary">
                      <span>Sign up</span>
                    </button>
                  )}
                </div>
                <div className="text-muted d-flex justify-content-center align-items-center">
                  <small style={{ color: "#bb2d00" }}>
                    Already have an account click on the arrow or{" "}
                    <Link to="/login">Sigin</Link>
                  </small>
                </div>
                <span>{err != null ? <Alert msg={err} /> : null}</span>
              </form>
            </div>
          </div>
        </div>
        <div className={`${styles.firstPart} col-lg-6`}>
          <div className={styles.part}>
            <img
              src="/5.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <h4
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Reading at your Pace
            </h4>
            <p
              className="py-2 fw-bold "
              style={{
                fontSize: "16px",
                color: "white",
                textAlign: "center",
              }}
            >
              A full customised plateform where you can read and get free or
              premium plan{" "}
            </p>
            <div
              onClick={() => window.location.assign("/login")}
              className={`${styles.look} py-2 d-flex justify-content-center align-items-center`}
            >
              <div
                className={`${styles.circle} d-flex justify-content-center align-items-center`}
              >
                <i class="fas fa-arrow-right" style={{ fontSize: "20px" }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Registeration.propTypes = {
//   register: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool,
// };
// const mapToProps = (state) => ({
//   // isAuthenticated: state.auth.isAuthenticated,
// });
export default Registeration;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      show={props.show}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div
          className="pend"
          style={{
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
            <div className="containerColumn fw-bold ">
              <Lottie options={defaultOptions} height={400} width={"70%"} />
            </div>
            <h3 style={{ textAlign: "center", color: "grey" }}>
              Registeration Succesfull
            </h3>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div
          className="btn btn-primary"
          onClick={() => {
            localStorage.removeItem("I_REQUESTED");
            props.close(false);
            window.location.reload();
          }}
        >
          close
        </div>
      </Modal.Footer>
    </Modal>
  );
}
