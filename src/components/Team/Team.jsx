import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Team.module.css";
function Team() {
  return (
    <div style={{ height: "50%", marginTop: "7em" }}>
      <h2
        className="text-center"
        style={{ color: "#222f3e", fontWeight: "bold" }}
      >
        Our Team
      </h2>
      <Carousel>
        <Carousel.Item interval={2000}>
          <div
            className="slot"
            style={{
              // width: "100",
              // height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img className="d-block w-100" src="/dip1.jpg" alt="First slide" />
          </div>
          <Carousel.Caption>
            <h1 style={{ fontWeight: "bold" }}>Team</h1>
            <h3
              className={` ${styles.teamText}`}
              style={{ color: "#fff", fontWeight: "bold" }}
            >
              {" "}
              Years of personal experience have proven that the saying by John
              C. Maxwell “Everything rises and falls on leadership” is hardly an
              exaggeration. Leadership is at the center of the growth of every
              institution, organizations, governments, networks and of course
              network marketing just to name a few.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="slot2"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img className="d-block w-100" src="/dip2.jpg" alt="Second slide" />
          </div>

          <Carousel.Caption>
            <h1 style={{ fontWeight: "bold" }}>Team</h1>
            <h3
              className={` ${styles.teamText}`}
              style={{ color: "#fff", fontWeight: "bold" }}
            >
              {" "}
              Years of personal experience have proven that the saying by John
              C. Maxwell “Everything rises and falls on leadership” is hardly an
              exaggeration. Leadership is at the center of the growth of every
              institution, organizations, governments, networks and of course
              network marketing just to name a few.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="slot3"
            style={{
              // width: "100",
              // height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            <img className="d-block w-100" src="/tim.jpeg" alt="Third slide" />
          </div>

          <Carousel.Caption>
            <h1 style={{ fontWeight: "bold" }}>Team</h1>
            <h3
              className={` ${styles.teamText}`}
              style={{ color: "#fff", fontWeight: "bold" }}
            >
              {" "}
              Years of personal experience have proven that the saying by John
              C. Maxwell “Everything rises and falls on leadership” is hardly an
              exaggeration. Leadership is at the center of the growth of every
              institution, organizations, governments, networks and of course
              network marketing just to name a few.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Team;
