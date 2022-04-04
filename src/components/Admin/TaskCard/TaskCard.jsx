import React, { useState } from "react";
import styles from "./TaskCard.module.css";
import { Avater } from "../../../components";
import { Button, Modal } from "react-bootstrap";
import { _viewAllTasks, _deleteBook } from "../../../Helpers/adminHelper";
import moment from "moment";
import { Link } from "react-router-dom";

function TaskCard({ book }) {
  const [show, setShow] = useState(false);
  const [pdfContent, setPdfContent] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const [storePDF, setStorePDF] = useState(null);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  const { name, plan } = book;

  const openPdf = async (data) => {
    setShowPdf(true);
    try {
      let pdfURL = `${process.env.REACT_APP_URL}/admin/books/images/${data.pdf}`;
      setStorePDF(pdfURL);

      // window.open(pdfURL, "_blank", "#toolbar=0");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.mainCOntainer}>
      <ModalComponent
        name={name}
        book={book}
        show={show}
        handleClose={handleClose}
      />
      {/* {showPdf && (
          // <Document file={PDF}>
          //   <Page pageNumber={1} />
          // </Document>
        )} */}
      <div className={styles.card}>
        <div
          className={`
          ${
            plan === "free"
              ? `${styles.colorContainer}`
              : `${styles.colorContainerPremium}`
          }
          `}
        ></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "12px",
            flexDirection: "column",
          }}
        >
          {moment(parseInt(book.date)).format("MMMM Do YYYY")}
        </div>
        <div className={`containerCenter`}>
          <div className={styles.line}></div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "12px",
          }}
          containerCenter
          className={` ${styles.bookContainer}  `}
        >
          {/* <div>
            <Avater
              imageUrl={book.coverPage ? book.coverPage : "/defaultBook.png"}
            />
          </div> */}
          <div className={styles.txtContainer}>
            {book.name} <br />
            <span className={styles.email}> {book.author}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "123px",
            marginLeftRight: "12px",
          }}
        >
          <div
            style={{
              color: "#000",
            }}
            className={`${styles.pendingContianer} `}
          >
            {book.views} views
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "123px",
            marginLeftRight: "12px",
          }}
        >
          <span className={styles.usersPlan}>{book.plan} </span>
          <div className={`${styles.pendingContianer} `}>
            <div className={styles.round}></div>
          </div>
        </div>
        <div className="containerCenter">
          <Link
            to="/pdfview"
            state={{
              pdfURL: `${process.env.REACT_APP_URL}/admin/books/images/${book.pdf}`,
            }}
            className={`btn btn-success mr-3`}
          >
            <i
              onClick={() => openPdf(book)}
              style={{
                color: "#fff",
              }}
              className={` fas fa-eye 
          ${plan === "Free" ? `${styles.eyeIconFree}` : `${styles.eyeIcon}`}
          `}
            ></i>
          </Link>
        </div>
        {/* <div className="containerCenter">
          <div className={`btn btn-danger mr-3 `} onClick={handleShow}>
            <i className="fas fa-times"></i>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default TaskCard;

function ModalComponent({ show, handleClose, name, book }) {
  const deleteBook = (bookID) => {
    handleClose();
    _deleteBook(bookID).then((response) => {
      window.location.reload();
    });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete this book ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure Delete
          <i>
            <b> {name}</b>
          </i>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => deleteBook(book._id)}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
