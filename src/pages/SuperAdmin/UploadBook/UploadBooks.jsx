import React, { useState } from "react";
import { SuperAdminLayout } from "../..";
import { Header } from "../../../components";
import { Form, Col, Button, Row, Modal } from "react-bootstrap";
import { _addABook } from "../../../Helpers/adminHelper";
import { Navigate } from "react-router-dom";
import {
  submitBookSPinner,
  currentlyAddedBook,
} from "../../../redux/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { Header2 } from "../../../components";

function Upload() {
  const dispatch = useDispatch();
  const adminState = useSelector((state) => state.admin);

  const [validated, setValidated] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [formData, setFormData] = useState({
    name: "",
    author: "",
  });
  const [failureToSend, setfailureToSend] = useState(null);
  const [images, setimages] = useState();
  const [showSuccessModal, setshowSuccessModal] = useState(false);
  const [toggle, setToggle] = useState("free", "premium");
  const { name, author } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePdfDocument = (e) => {
    let pdf = e.target.files[0];
    setimages(pdf);
  };

  const handleImageChange = (e) => {
    let image = e.target.files[0];
    setSelectedImage(image);
  };

  const handleSelectFreeOrPremium = (e) => {
    setToggle(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    dispatch(submitBookSPinner(true));

    const dataToSend = new FormData();
    dataToSend.append("images", images);
    dataToSend.append("images", selectedImage);
    dataToSend.append("name", formData.name);
    dataToSend.append("author", formData.author);
    dataToSend.append("plan", toggle);

    _addABook(dataToSend).then((response) => {
      console.log(response);
      if (response.code === 400) {
        console.log("alice");
        dispatch(submitBookSPinner(false));

        setfailureToSend(response.data.message);
      } else {
        console.log("yaya");
        dispatch(currentlyAddedBook(response));
        setshowSuccessModal(true);
      }
    });
  };

  const handleClose = () => {
    setshowSuccessModal(false);
  };
  return (
    <SuperAdminLayout>
      <Header2 />
      {/* <Header title={"Upload A Book"} hidden /> */}
      <h1 style={{ marginBottom: "2em" }}>Upload A Book</h1>
      <SuccessModal show={showSuccessModal} handleClose={handleClose} />

      <div className="pt-5 pb-5">
        <div className="row">
          <div className="col-lg-12">
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" className="mb-4">
                  <Form.Label className=" fw-bold">Name Of Book</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => handleChange(e)}
                    placeholder="Name of book"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12">
                  <Form.Label className=" fw-bold">Author Of Book</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Author"
                    name="author"
                    value={author}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" className="mb-4">
                  <Form.Label className=" fw-bold">Type</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => handleSelectFreeOrPremium(e)}
                  >
                    <option value="free">Free</option>
                    <option value="premium">Premium</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="12">
                  <Form.Label className=" fw-bold">Upload Book</Form.Label>
                  <Form.Control
                    required
                    type="file"
                    name="upload"
                    accept="application/pdf , application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint,text/plain"
                    placeholder="Select A Book"
                    onChange={(e) => handlePdfDocument(e)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="12" className="mb-3">
                  <Form.Label className=" fw-bold">
                    Upload Cover Page
                  </Form.Label>
                  <Form.Control
                    required
                    type="file"
                    id="img"
                    name="image"
                    accept="image/*"
                    placeholder="Select A Book"
                    onChange={(e) => handleImageChange(e)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              {/* <Row className=" px-3">
                <Button type="submit">Submit form</Button>
              </Row> */}
              <div class="col-12">
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
                    <Button type="submit">Submit form</Button>
                  </Row>
                )}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
}

export default Upload;

function SuccessModal({ title, show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Book Succesfully added</Modal.Body>
      </Modal>
    </>
  );
}
