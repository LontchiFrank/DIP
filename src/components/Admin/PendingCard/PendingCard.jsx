import React, { useState } from "react";
import styles from "./PendingCard.module.css";
import { Avater } from "../../../components";
import { Button, Modal } from "react-bootstrap";
import {
  _upgradeUsersPlan,
  _denyUsersPlanUpgrade,
} from "../../../Helpers/adminHelper";
import { useDispatch } from "react-redux";
import moment from "moment";
function PendingCard({ user }) {
  const [show, setShow] = useState(false);
  const [showAceptModal, setshowAceptModal] = useState(false);
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
                user.avater.length < 1 ? "/Default-avatar.jpg" : user.avater
              }
            />
          </div>
          <div className={styles.txtContainer}>
            {user.name} <br />
            <span className={styles.email}> {user.email}</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className={styles.usersPlan}>{user.plan} </span>
          <div className={`${styles.pendingContianer} `}>
            <div className={styles.round}></div>
            pending...
          </div>
        </div>
        <div className="containerCenter">
          <div
            className={`btn btn-primary mr-3  ${styles.buttons}`}
            onClick={handleAcceptModal}
          >
            Accept
          </div>
          <div
            onClick={handleShow}
            className={`btn btn-danger mr-3 ${styles.buttons} `}
          >
            Decline
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingCard;

function ModalComponent({ user, handleClose, show }) {
  const { plan, _id, name, planType } = user;

  const denyUpgrade = (currentPlan, userID) => {
    handleClose();
    _denyUsersPlanUpgrade(currentPlan, userID).then((res) =>
      window.location.reload()
    );
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to cancel
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
          <Button variant="primary" onClick={() => denyUpgrade(plan, _id)}>
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
