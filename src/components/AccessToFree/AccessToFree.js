import React, { useEffect, useState } from "react";
import { MyFree1 } from "../../components";
import BooksCard from "../../components/BookxCard/BooksCard";
import Unexpected from "../Unexpected";
import styles from "./AccessToFree.module.css";
import { useSelector, useDispatch } from "react-redux";
import { _getFreeBooks } from "../../Helpers/adminHelper";
import { getAllFreeBooks, loadingState } from "../../redux/actions/adminAction";
import { loadUser } from "../../redux/actions/userAction";
import { _loadeCurrentlyLogedInUser } from "../../Helpers/userHelper";
import Lottie from "react-lottie";
import animationData from "../../annimations/91361-page-not-found-animation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function AccessToFree() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.admin);
  const {
    error,
    allFreeBooks,
    loading,
    freeBooksFilteredList,
    shouldLoadLottieAnnimation,
  } = data;

  const [alice, setalice] = useState([]);

  useEffect(() => {
    dispatch(loadingState(true));
    _loadeCurrentlyLogedInUser().then((data) => {
      dispatch(loadUser(data));
    });

    _getFreeBooks().then((response) => dispatch(getAllFreeBooks(response)));
  }, []);

  return (
    <MyFree1>
      <div className={`${styles.all} row pt-3 pb-5 flex-lg-wrap`}>
        <div className={`${styles.all} row pt-3 pb-5 d-flex flex-lg-wrap`}>
          {error != null ? (
            <Unexpected />
          ) : (
            <div className="col-12">
              <br />
              {loading ? (
                <div className={`containerCenter spinnerContainer`}>
                  <div className="spinner"></div>
                </div>
              ) : (
                <div style={{ width: "100%", height: "fit-content" }}>
                  {shouldLoadLottieAnnimation ? (
                    <LottieView />
                  ) : (
                    <>
                      <div className="col-12 col-md-12 col-sm-12">
                        {allFreeBooks.length > 0 && (
                          <div>
                            {freeBooksFilteredList.length > 0 ? (
                              <div className="d-flex flex-wrap col-md-12  col-sm-12">
                                {freeBooksFilteredList.map((book, index) => (
                                  <div key={index} className="d-flex">
                                    <BooksCard book={book} index={index} />
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div
                                className={` ${styles.flow} d-flex flex-wrap col-md-12  col-sm-12  `}
                              >
                                {allFreeBooks.map((book, index) => (
                                  <div key={index} className="d-flex">
                                    <BooksCard book={book} index={index} />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </MyFree1>
  );
}

export default AccessToFree;
const LottieView = () => {
  return (
    <div className="containerColumn fw-bold ">
      <Lottie options={defaultOptions} height={400} width={"70%"} />
      <p
        style={{
          fontSize: 21,
        }}
      >
        Oops we couln't find something for this category
      </p>
    </div>
  );
};
