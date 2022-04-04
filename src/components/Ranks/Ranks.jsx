import React from "react";
import styles from "./Rank.module.css";
import { Card } from "react-bootstrap";
function Ranks() {
  return (
    <div
      className="container "
      style={{
        width: " 100%",
        height: "100%",
        paddingTop: "5em",
      }}
    >
      <h2
        className="text-center"
        style={{ color: "#222f3e", fontWeight: "bold" }}
      >
        DIP Recognition Ranks
      </h2>
      <div className="d-flex justify-content-center flex-wrap">
        <Card
          border="light"
          style={{
            marginLeft: "1em",
            marginTop: "2em",
            width: "18rem",
            height: "300px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          className="col-md-12 col-sm-12"
        >
          <Card.Body>
            <div className="d-flex justify-content-center">
              <i
                class="fa fa-bullhorn"
                aria-hidden="true"
                style={{ fontSize: "100px" }}
              ></i>
            </div>
            <h2 className="d-flex justify-content-center align-items-center">
              Skipper
            </h2>
          </Card.Body>
        </Card>
        <Card
          border="light"
          style={{
            marginLeft: "1em",
            marginTop: "2em",
            width: "18rem",
            height: "300px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          className="col-md-12 col-sm-12"
        >
          <Card.Body>
            <div className="d-flex justify-content-center">
              <i
                class="fa fa-universal-access"
                aria-hidden="true"
                style={{ fontSize: "100px" }}
              ></i>
            </div>
            <h2 className="d-flex justify-content-center align-items-center">
              Pro
            </h2>
          </Card.Body>
        </Card>
        <Card
          border="light"
          style={{
            marginLeft: "1em",
            marginTop: "2em",
            width: "18rem",
            height: "300px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          className="col-md-12 col-sm-12"
        >
          <Card.Body>
            <Card.Title>
              {" "}
              <div className="d-flex flex-column justify-content-center align-items-center">
                <i
                  class="fa fa-male"
                  aria-hidden="true"
                  style={{ fontSize: "100px" }}
                ></i>
                <h2 className="d-flex justify-content-center align-items-center">
                  Senior Pro
                </h2>
              </div>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          border="light"
          style={{
            marginLeft: "1em",
            marginTop: "2em",
            width: "18rem",
            height: "300px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          className="col-md-12 col-sm-12"
        >
          <Card.Body>
            <div className="d-flex justify-content-center">
              <i
                class="fa fa-cubes"
                aria-hidden="true"
                style={{ fontSize: "100px" }}
              ></i>
            </div>
            <h2 className="d-flex justify-content-center align-items-center">
              Mentor Pro
            </h2>
          </Card.Body>
        </Card>
        <Card
          border="light"
          style={{
            marginLeft: "1em",
            marginTop: "2em",
            width: "18rem",
            height: "300px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          className="col-md-12 col-sm-12"
        >
          <Card.Body>
            <div className="d-flex justify-content-center">
              <i
                class="fa fa-cloud"
                aria-hidden="true"
                style={{ fontSize: "100px" }}
              ></i>
            </div>
            <h2 className="d-flex justify-content-center align-items-center">
              Captain
            </h2>
          </Card.Body>
        </Card>
        <Card
          border="light"
          style={{
            marginLeft: "1em",
            marginTop: "2em",
            width: "18rem",
            height: "300px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          className="col-md-12 col-sm-12"
        >
          <Card.Body>
            <div className="d-flex justify-content-center">
              <i
                class="fa fa-user-secret"
                aria-hidden="true"
                style={{ fontSize: "100px" }}
              ></i>
            </div>
            <h2 className="d-flex justify-content-center align-items-center">
              Global Captain
            </h2>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Ranks;
