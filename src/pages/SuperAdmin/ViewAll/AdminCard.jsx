import React, { useState } from "react";
import styles from "../../../components/Admin/PendingCard/PendingCard.module.css";
import { Avater } from "../../../components";
import { Button, Modal, Form } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  _upgradeUsersPlan,
  _denyUsersPlanUpgrade,
} from "../../../Helpers/adminHelper";
import { _removeAdmin } from "../../../Helpers/superAdminHelper";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

function AdminCard({ user }) {
  const userInfo = useSelector((state) => state.superAdmins);

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [showAceptModal, setshowAceptModal] = useState(false);
  const [showFormModal, setshowFormModal] = useState(false);

  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleShow1 = () => setshowFormModal(true);
  const handleClose = () => setShow(false);
  const handleClose1 = () => setshowFormModal(false);

  const handleAcceptModal = () => setshowAceptModal(true);
  const handleCloseAcceptModal = () => setshowAceptModal(false);

  const { name } = user;
  return (
    <div className={styles.mainCOntainer}>
      <ModalComponent
        name={name}
        id={user._id}
        desiredPlan={user.planType}
        show={show}
        handleClose={handleClose}
        dispatch={dispatch}
        user={user}
      />
      <AcceptModal
        show={showAceptModal}
        handleClose={handleCloseAcceptModal}
        dispatch={dispatch}
        user={user}
      />
      {/* <FormModal
        show={showFormModal}
        handleClose={handleClose1}
        info={user.email}
        password={user.password}
      /> */}

      <div className={styles.card}>
        <div className={styles.colorContainer}></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {moment(parseInt(user.date)).format("MMMM Do YYYY")}
        </div>
        <div className={`containerCenter`}>
          <div className={styles.line}></div>
        </div>
        <div className={`containerCenter ${styles.userInfoContainer}`}>
          <div>
            <Avater
              imageUrl={
                user.avater && user.avater != ""
                  ? user.avater
                  : "/Default-avatar.jpg"
              }
            />
          </div>
          <div className={styles.txtContainer}>
            {user.name} <br />
            <span className={styles.email}> {user.email}</span>
          </div>
        </div>
        <div style={{ cursor: "pointer" }} onClick={handleShow1}>
          <i class="fas fa-eye mt-3"></i>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className={styles.usersPlan}>admin</span>
          <div className={`${styles.pendingContianer} `}>
            <div className={styles.round}></div>
          </div>
        </div>
        <div className="containerCenter">
          <div
            onClick={handleShow}
            className={`btn btn-danger mr-3 ${styles.buttons} `}
          >
            Remove
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCard;

function ModalComponent({ user, handleClose, show }) {
  const { plan, _id, name, planType } = user;

  const removeAdminAccount = (userID) => {
    console.log("hey");
    handleClose();
    _removeAdmin(userID).then((res) => window.location.reload());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to remove
          <b>
            <i>{name}</i>
          </b>
          as admin
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => removeAdminAccount(_id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function AcceptModal({ user, handleClose, show }) {
  const { plan, _id, name, planType } = user;

  const acceptPlanChange = (desiredPlan, userID) => {
    handleClose();
    _upgradeUsersPlan(desiredPlan, userID).then((response) => {
      window.location.reload();
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Validate Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Validate
          <b>
            <i>{name}'s</i>
          </b>
          request ? for a{" "}
          <b>
            <i>{planType}</i>
          </b>
          plan
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => acceptPlanChange(planType, _id)}
          >
            Validate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function FormModal({ title, show, handleClose, info, password }) {
  let name = ["asd", "ghy"];

  const [toggleEyePassword1, setToggleEyePassword1] = useState(false);
  const [box, setBox] = useState("");
  const [box1, setBox1] = useState("");
  const [copied, setCopied] = useState(false);
  const handletoggleEyePassword1 = () => {
    setToggleEyePassword1(!toggleEyePassword1);
    name.split(",");
  };

  let arr = `Email: ${info}, Password:${password}`;
  let arr1 = arr.split(",");

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Credentials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={info}
                onChange={({ target: { info } }) => setBox(info)}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <div class="col-md-12">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <div
                className="inputPass "
                style={{
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
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
                  name="password"
                  value={password}
                  onChange={({ target: { password } }) => setBox(password)}
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
            <CopyToClipboard
              text={arr}
              //  onCopy={() => setCopied(true)}
            >
              <button className="col-12 btn btn-primary">
                <span>Copy</span>
              </button>
            </CopyToClipboard>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
