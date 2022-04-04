import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import emailjs from "emailjs-com";
// import code from "./Code"
function MyPage({ children }) {
  const [open, setOpen] = useState();
  const [showSuccessModal, setshowSuccessModal] = useState(false);

  const handleClose = () => {
    setshowSuccessModal(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ih8kre",
        "template_101i6ot",
        e.target,
        "qEPbDcJbTvNX3kRmh"
      )
      .then((res) => {
        setshowSuccessModal(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <main>
      <SuccessModal show={showSuccessModal} handleClose={handleClose} />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"></script>

      {/* Top header */}
      <nav className="navbar navbar-expand-lg navbar-light  pt-3 pb-3">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
            href="#"
            style={{ color: "#222f3e", fontweight: "700" }}
          >
            <img src="/Dip.jpeg" className="img-responsive" height="60" />
            Dream Institution For Professionalism
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              {" "}
              <i class="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link actived"
                  aria-current="page"
                  style={{ color: "#222f3e", fontweight: "700" }}
                >
                  Home
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Institute Background &raquo;
                    </a>
                    <ul class="dropdown-menu dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Submenu item 1
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Motivation &raquo;
                    </a>
                    <div class="dropdown-menu dropdown-submenu">
                      <div
                        className="px-4"
                        style={{ height: "fit-content", width: "26vw" }}
                      >
                        {/* <a class="dropdown-item" href="#">
                          Submenu item 1
                        </a> */}
                        <p>
                          <h4 className="text-center">Our Motivation</h4>
                          We are a modern and innovative support system created
                          to provide support to those who want to excel in their
                          career of network marketing, politics, health,
                          teaching etc. Talking about network marketing which is
                          our main nitch, the average person just by hearing the
                          name ‘network marketing” wouldn’t want to give a
                          listening ear. However, it has been proven that most
                          people actually give it a chance when they are guided
                          to understand the basics about the industry. So in an
                          attempt to know why many people hate network
                          marketing, we found out that many people from the
                          first sight don’t like the name network marketing
                          because they know very little or nothing about it. All
                          they will tell you is “network marketing is about
                          buying and selling products , bringing 2 people to
                          bring 2 people…” etc. And this can be traced from the
                          fact that most companies, team leaders, individuals in
                          network marketing don’t have a good mastery and hence
                          don’t provide necessary professional support and
                          training. Reasons why many adventurers, first timers,
                          darers who have little or no results in this industry
                          keep painting a negative image and impressions about
                          network marketing even when they are in a good and
                          genuine company. Again The most disturbing part of it
                          is that the rise of ponzy schemes, scams and fake
                          network marketing companies is alarming. Reasons why
                          we have more victims who ofcourse don’t appreciate the
                          industry because of their negative experiences. Very
                          few companies have systems that help them to do things
                          right. Dream Institute for Professionalism(DIP) was
                          formed to solve the above mentioned challenges. DIP is
                          an innovative modern support system which provides
                          coaching and mentorship through expertise tools. We
                          believe through DIP we will redefine the industry and
                          give it a positive image that it deserves.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Key Partners (SuperLife) &raquo;
                    </a>
                    <div class="dropdown-menu dropdown-submenu">
                      <div
                        className="px-4"
                        style={{ height: "fit-content", width: "20vw" }}
                      >
                        <p>
                          <h4 className="text-center">
                            Key Partners (SuperLife){" "}
                          </h4>
                          Our institute (DIP) is practical and result oriented.
                          We train and empower our leaders with skills w And
                          provide them a proven company to practically apply the
                          knowledge they acquire simultaneously to obtain
                          feasible results. Our partner is SuperLife World SDN,
                          one of the best professional network marketing
                          companies in the world, based in Malaysia. SuperLife
                          is a 4-years-old company that is recognized for its
                          stem cell therapeutic superfoods. With its core
                          business as a multilevel marketing and direct selling
                          company, its businesses are conducted under strict
                          rulings and business etiquette. Working alongside
                          local authorities around the globe and its Switzerland
                          partner Mibelle Group to produce superfoods, have made
                          SuperLife’s business reliable and grow with strong
                          expectations. Superlife world is founded by Mr Lai Tek
                          Ken alongside other 3 co-founders. Paul Nair,
                          Co-Founder and Executive Director, Harry Tee,
                          Co-Founder and Executive Director, To know more about
                          Superlife World, visit www.superlifeworld.com
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/testimony"
                  className="nav-link actived"
                  aria-current="page"
                  style={{ color: "#222f3e", fontweight: "700" }}
                >
                  Testimonies
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link actived"
                  aria-current="page"
                  style={{ color: "#222f3e", fontweight: "700" }}
                >
                  Contact
                </Link>
              </li>
              <div className="d-flex" style={{ gap: "6px " }}>
                <button
                  type="button"
                  class="btn btn-outline-success p-0 py-0 px-2"
                  style={{ border: "2px solid #28a745" }}
                >
                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="nav-link actived"
                      aria-current="page"
                      style={{ color: "#222f3e", fontweight: "700" }}
                    >
                      Signin
                    </Link>
                  </li>
                </button>

                <button type="button" class="btn btn-primary btn-sm py-0">
                  <li className="nav-item">
                    {" "}
                    <Link
                      to="/signup"
                      className="nav-link actived"
                      aria-current="page"
                      style={{ color: "white" }}
                    >
                      Signup
                    </Link>
                  </li>
                </button>
              </div>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </nav>

      <div>{children}</div>

      {/* Footer */}

      <footer
        className="container-fluid page-footer font-small pt-4"
        style={{ backgroundColor: "#BFD9FE" }}
      >
        <div className="container text-md-left">
          <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
              <h5 className="text-uppercase">
                Dream Institution For Professionalism
              </h5>
              <p>
                Proven that most people actually give it a chance when they are
                guided to understand the basics about the industry.
              </p>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    Home page
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    Contribute
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    +2376 70 21 27 26 | 6 71 03 30 40
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    info@dipglobalsystem.com
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      listStyle: "none",
                    }}
                  >
                    Yaounde, Lorem ipsum dolo
                  </a>
                </li>
              </ul>
            </div>
            <form onSubmit={sendEmail} class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 class="text-uppercase mb-4">Feedback to the Company</h5>

              <div class="form-outline form-light mb-4">
                <input
                  type="text"
                  name="name"
                  id="form5Example2"
                  class="form-control"
                  style={{ border: "2px solid white" }}
                />
                <label
                  class="form-label"
                  for="form5Example2"
                  style={{ color: "black" }}
                >
                  Your Name
                </label>
              </div>
              <div class="form-outline form-light mb-4">
                <input
                  type="email"
                  name="user_email"
                  id="form5Example2"
                  class="form-control"
                  style={{ border: "2px solid white" }}
                />
                <label
                  class="form-label"
                  for="form5Example2"
                  style={{ color: "black" }}
                >
                  Your Email address
                </label>
              </div>
              <div class="form-outline form-light mb-4">
                <input
                  type="number"
                  id="form5Example2"
                  name="phone"
                  class="form-control"
                  style={{ border: "2px solid white" }}
                />
                <label
                  class="form-label"
                  for="form5Example2"
                  style={{ color: "black" }}
                >
                  Your Phone Number
                </label>
              </div>
              <div class="form-outline form-light mb-4">
                <textarea
                  class="form-control"
                  name="message"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  style={{ border: "2px solid white" }}
                ></textarea>
                <label
                  class="form-label"
                  for="form5Example2"
                  style={{ color: "black" }}
                >
                  Your Comment
                </label>
              </div>

              <button
                type="submit"
                class="btn btn-outline-light btn-block"
                style={{ fonWeight: "bold" }}
              >
                Send Feedback
              </button>
            </form>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>

        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a
            href="https://mdbootstrap.com/"
            style={{
              textDecoration: "none",
              color: "black",
              listStyle: "none",
            }}
          >
            {" "}
            dip.com
          </a>
        </div>
      </footer>
    </main>
  );
}

export default MyPage;

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
