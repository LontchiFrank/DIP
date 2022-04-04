import React from "react";
import { Link } from "react-router-dom";
import { Mission, Vision, MyPage } from "../../components";
import Fade from "react-reveal/Fade";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
// import Network from "../../components/Network/Network";
import Team from "../../components/Team/Team";
import Ranks from "../../components/Ranks/Ranks";

function Home() {
  const user = useSelector((state) => state.user);
  console.log(user.isAuthenticated);

  return (
    <MyPage>
      {" "}
      <div className=" pt-2 pb-5 mt-2 mb-2">
        <div
          className={` ${styles.home} container py-2 pb-5 d-flex`}
          style={{ marginBottom: "5em" }}
        >
          <div className="col-lg-6 col-md-12 ">
            <Fade left>
              <div className="text-align-left pt-3 pb-3">
                <h1
                  style={{
                    color: "#1F73B9",
                    fontSize: "3.5em",
                    fontWeight: "bold",
                  }}
                >
                  Welcome To Dream Institution For Professionalism
                </h1>
              </div>
              <div className="text-align-left py-2">
                <h3 style={{ color: "#6BA349", fontWeight: "bold" }}>
                  Building Deeper, Building Differently
                </h3>
              </div>
              <div className={` ${styles.findInput} row py-1 d-flex`}>
                <div className={` ${styles.enter} p-0`}>
                  {/* <input
                    className="form-control"
                    placeholder="| Type Word Here"
                  /> */}
                  <h4
                    className="text-center fw-bold"
                    style={{ color: "#a4b0be" }}
                  >
                    “To handle yourself, use your head; to handle others, use
                    your heart.”
                  </h4>
                </div>
                <div className={` ${styles.press} p-0`}>
                  <Link to="/translatio">
                    <button className=" w-100  fw-bold">
                      By Eleanor Roosevelt
                    </button>
                  </Link>
                </div>
              </div>
              <div className="row py-3" style={{ width: "100%" }}>
                <h4
                  className="fs-5  "
                  style={{ color: "#222f3e", lineHeight: "1.5" }}
                >
                  Years of personal experience have proven that the saying by
                  John C. Maxwell “Everything rises and falls on leadership” is
                  hardly an exaggeration. Leadership is at the center of the
                  growth of every institution, organizations, governments,
                  networks and of course network marketing just to name a few.
                  DIP is a product conceived in the quest to provide solutions
                  to these leadership crisis in some of the aforementioned
                  sectors with keen interest in but not limited to network
                  marketing.
                </h4>
              </div>
            </Fade>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <Fade bottom>
              <div className="hold">
                <img
                  src="/a.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Fade>
          </div>
        </div>
        <Mission />
        <Vision />
        <Team />
        <Ranks />
      </div>
    </MyPage>
  );
}

export default Home;
