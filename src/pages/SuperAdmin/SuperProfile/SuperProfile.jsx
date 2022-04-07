import React, { useState, useEffect } from "react";
import styles from "./SuperProfile.module.css";
import { SuperAdminLayout } from "../../../pages";
import { Header } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { Form, Col, Button, Row, Modal } from "react-bootstrap";
import { _updateAdminInfo } from "../../../Helpers/adminHelper";
import animationData from "../../../annimations/5449-success-tick.json";
import Lottie from "react-lottie";
import {
  loadAdmin,
  updatedAdminInfo,
} from "../../../redux/actions/adminAction";
import {
  _loadeCurrentlyLogedInUser,
  _updateUserInfo,
} from "../../..//Helpers/userHelper";
import { loadUser, updatedUserInfo } from "../../../redux/actions/userAction";
import { Header2 } from "../../../components";
import log1 from "../../../assets/defaultUserPic.webp";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function SuperProfile() {
  const user = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [selectedImage, setSelectedImage] = useState();
  const { name, email, password, password2 } = formData;
  const dispatch = useDispatch();
  const [err, setErr] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
  }, []);

  useEffect(() => {
    if (user && user.user) {
      setFormData(user.user);
    }
  }, [user]);

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    let image = e.target.files[0];
    setSelectedImage(image);
  };

  const onsubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append("image", selectedImage);
    dataToSend.append("name", name);
    dataToSend.append("email", email);

    _updateAdminInfo(dataToSend)
      .then((response) => {
        console.log(response, "response received");
        if (response.code === 400) {
          console.log("i found an error");
          setErr(response.errorMessage);
        } else {
          dispatch(updatedAdminInfo(response));
          setModalShow(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <SuperAdminLayout>
      <MyVerticallyCenteredModal show={modalShow} close={setModalShow} />
      <Header2 />
      <h1>Profile</h1>
      <div className=" pb-5 " style={{ paddingTop: "6em" }}>
        <Form onSubmit={(e) => onsubmit(e)}>
          <Row>
            <div className="d-flex col-lg-4">
              <div className={`${styles.round}`}>
                <div className={`${styles.profilePic} `}>
                  {user && user.user ? (
                    <label for="img" className={`${styles.takephoto} `}>
                      <img
                        for="img"
                        src={
                          selectedImage
                            ? URL.createObjectURL(selectedImage)
                            : user && user.user && user.user.avater
                            ? user.user.avater
                            : log1
                        }
                        className="img-fluid rounded border card"
                        style={{ width: "100%", height: "100%" }}
                      />
                      <input
                        type="file"
                        id="img"
                        name="image"
                        accept="image/*"
                        className="d-none"
                        //
                        onChange={(e) => handleImageChange(e)}
                      />
                    </label>
                  ) : (
                    <div
                      className="containerCenter"
                      style={{
                        height: "45vh",
                      }}
                    >
                      <div className="spinner"></div>
                    </div>
                  )}
                </div>
                <p className="petit">Click above to upload image</p>
              </div>
            </div>
            <div className="other-form col-lg-8">
              <Row className="mb-3">
                <Form.Group as={Col} md="12" className="mb-4">
                  <Form.Label>Name </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={(e) => onchange(e)}
                    value={name}
                  />
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    onChange={(e) => onchange(e)}
                    value={email}
                    disabled
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                {/* <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={user.user.role}
                  />
                </Form.Group> */}
                <Row className=" pt-3">
                  {loading ? (
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
                    <Button type="submit">Edit Profile</Button>
                  )}
                </Row>
              </Row>
            </div>
          </Row>
        </Form>
      </div>
    </SuperAdminLayout>
  );
}

export default SuperProfile;

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
              Account details successfully updated
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
