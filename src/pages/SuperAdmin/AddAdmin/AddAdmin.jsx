import React, { useState } from "react";
import { SuperAdminLayout } from "../..";
import { Form, Button, Modal } from "react-bootstrap";
import styles from "./AddAdmin.module.css";
import { createAdmin, isLoading } from "../../../redux/actions/superAction";
import { _createAdmin } from "../../../Helpers/superAdminHelper";
import { useSelector, useDispatch } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Header2 } from "../../../components";
function AddAdmin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [err, setErr] = useState();
  const user = useSelector((state) => state.superAdmins);
  const dispatch = useDispatch();
  const [toggleEyePassword, setToggleEyePassword] = useState(false);
  const [toggleEyePassword1, setToggleEyePassword1] = useState(false);
  const [validationPassword, setValidationPassword] = useState(false);
  const [showSuccessModal, setshowSuccessModal] = useState(false);
  const { name, email, password, password2 } = formData;
  const [loader, setLoader] = useState(false);

  const handletoggleEyePassword = () => {
    setToggleEyePassword(!toggleEyePassword);
  };
  const handletoggleEyePassword1 = () => {
    setToggleEyePassword1(!toggleEyePassword1);
  };
  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onsubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    if (password !== password2) {
      setValidationPassword(true);
    } else {
      const data = { name, email, password };
      _createAdmin(data).then((response) => {
        if (response.code === 400) {
          console.log("i found an error");
          setErr(response.errorMessage);
          setLoader(false);
        } else {
          dispatch(createAdmin(response));
          setshowSuccessModal(true);
          setLoader(false);
        }
      });
    }
  };

  const handleClose = () => {
    setshowSuccessModal(false);
  };
  return (
    <SuperAdminLayout>
      <Header2 />
      <SuccessModal
        show={showSuccessModal}
        handleClose={handleClose}
        mail={email}
        pass={password}
      />
      <h2 style={{ paddingLeft: "2em" }}> Add Admins </h2>
      <div className={`${styles.holdtake}`}>
        <div className={`${styles.takeform}`}>
          <h4 className="mb-4">Create Admin Credentials here</h4>
          <Form onSubmit={(e) => onsubmit(e)}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => onchange(e)}
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => onchange(e)}
                placeholder="Enter email"
                autoComplete="off"
              />
              {/* <input placeholder="Enter Email" /> */}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <div class="col-md-12 mb-4">
              <label for="inputPassword4" className="form-label">
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
                  type={toggleEyePassword ? "text" : "password"}
                  className="form-control"
                  // id="inputPassword4"
                  name="password"
                  value={password}
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
            </div>

            <div class="col-md-12 mb-4">
              <label for="inputPassword4" className="form-label">
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
                  type={toggleEyePassword1 ? "text" : "password"}
                  className="form-control"
                  name="password2"
                  value={password2}
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
              </div>{" "}
              <span style={{ display: validationPassword ? "block" : "none" }}>
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
              {loader ? (
                <div
                  className=" col-12 btn btn-primary "
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
                </div>
              ) : (
                <button type="submit" className="col-12 btn btn-success">
                  <span>Create Admin</span>
                </button>
              )}
            </div>
          </Form>
        </div>
      </div>
    </SuperAdminLayout>
  );
}

export default AddAdmin;

function SuccessModal({ title, show, handleClose, mail, pass }) {
  let arr = `Email: ${mail}, Password:${pass}`;
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Admin Succesfully Created Email : {mail}, Password : {pass}
        </Modal.Body>
        <Modal.Footer>
          <CopyToClipboard
            text={arr}
            //  onCopy={() => setCopied(true)}
          >
            <button className="col-12 btn btn-primary">
              <span>Copy</span>
            </button>
          </CopyToClipboard>
        </Modal.Footer>
      </Modal>
    </>
  );
}
