import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Button, Modal } from "react-bootstrap";
import "./Feedback.css";
import { loadUser } from "../../redux/actions/userAction";
import { _loadeCurrentlyLogedInUser } from "../../Helpers/userHelper";
import {
  submitBookSPinner,
  currentlyAddedTask,
} from "../../redux/actions/userAction";
import { _addTask } from "../../Helpers/userHelper";
import animationData from "../../annimations/56132-error.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function Feedback() {
  const user = useSelector((state) => state.user);
  const [task, setTask] = useState({
    name: "",
    sponsorName: "",
    email: "",
  });

  useEffect(() => {
    _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
  }, []);

  const adminState = useSelector((state) => state.admin);
  const [pdf, setPdf] = useState();
  const dispatch = useDispatch();
  const [showSuccessModal, setshowSuccessModal] = useState(false);
  const [showRejectionModal, setshowRejectionModal] = useState(false);

  const [failureToSend, setfailureToSend] = useState(null);
  const { name, sponsorsName, email } = task;
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handlePdfDocument = (e) => {
    let pdf1 = e.target.files[0];
    setPdf(pdf1);
  };
  const handleClose = () => {
    setshowSuccessModal(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(submitBookSPinner(true));
    const dataToSend = new FormData();
    dataToSend.append("name", name);
    dataToSend.append("sponsorsName", sponsorsName);
    dataToSend.append("email", email);
    dataToSend.append("images", pdf);

    const Task = { task, pdf };
    console.log(Task);

    _addTask(dataToSend).then((response) => {
      console.log(response, "answer");
      if (response.code === 400) {
        console.log("alice");

        dispatch(submitBookSPinner(false));
        setshowRejectionModal(true);
        setfailureToSend(response.data.message);
      } else {
        console.log("yaya");
        dispatch(submitBookSPinner(false));
        dispatch(currentlyAddedTask(response));
        setshowSuccessModal(true);
      }
    });
    setTask({
      name: "",
      email: "",
      sponsorsName: "",
    });
    // setPdf(null);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <MyVerticallyCenteredModal
        show={showRejectionModal}
        close={setshowRejectionModal}
      />
      <SuccessModal show={showSuccessModal} handleClose={handleClose} />
      <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div class="wrapper wrapper--w790">
          <div class="card card-5">
            <div class="card-heading">
              <h2 class="title">Weekly Task Form</h2>
            </div>
            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <div class="form-row m-b-55">
                  <div class="name">Name</div>
                  <div class="value">
                    <div class="row row-space">
                      <div class="col-12">
                        <div class="input-group-desc">
                          <input
                            value={name}
                            class="input--style-5"
                            type="text"
                            name="name"
                            autoComplete=""
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-row m-b-55">
                  <div class="name">Sponsor's name</div>
                  <div class="value">
                    <div class="row row-space">
                      <div class="col-12">
                        <div class="input-group-desc">
                          <input
                            value={sponsorsName}
                            class="input--style-5"
                            type="text"
                            name="sponsorName"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-row m-b-55">
                  <div class="name">Email</div>
                  <div class="value">
                    <div class="col-12">
                      <div class="input-group-desc px-2">
                        <input
                          value={email}
                          class="input--style-5 "
                          type="email"
                          name="email"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-row p-t-20">
                  <label class="label label--block">Upload Task</label>
                  <div class="p-t-15 ">
                    <div className="col-md-12">
                      <input
                        required
                        type="file"
                        name="upload"
                        accept="application/pdf , application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint,text/plain"
                        placeholder="Select A Book"
                        onChange={(e) => handlePdfDocument(e)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  {adminState.bookSPinner ? (
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
                    <Row className=" px-3">
                      <Button className="btn btn-danger" type="submit ">
                        Submit Task
                      </Button>
                    </Row>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;

function SuccessModal({ title, show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Book Or Video Succesfully added</Modal.Body>
      </Modal>
    </>
  );
}

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
            // width: "100vw",
            // height: "100%",
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
              Sorry, Something went wrong , Please try again later
            </h3>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div
          className="btn btn-danger"
          onClick={() => {
            localStorage.removeItem("I_REQUESTED");
            props.close(false);
          }}
        >
          close
        </div>
      </Modal.Footer>
    </Modal>
  );
}
