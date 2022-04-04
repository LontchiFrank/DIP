import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Dropdown } from "react-bootstrap";
import {
  usersFilteredList,
  booksFilteredList,
  freeBooksFilteredList,
  loadLottieAnnimation,
} from "../../../redux/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header1({
  setChoiceOnPlanType,
  title,
  filtrationList,
  filtrationFree,
  from,
  to,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [currentSelectValue, setcurrentSelectValue] = useState("");
  const [toggleSideMenu, settoggleSideMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const search = (e) => {
    setSearchValue(e.target.value);
    let newText = e.target.value.toLowerCase();
    if (newText !== "") {
      let itemToFilter = newText.toLowerCase();

      if (to === "books Array") {
        let results = filtrationList.filter(
          (item) =>
            item.name.toLowerCase().includes(itemToFilter) ||
            item.author.toLowerCase().includes(itemToFilter) ||
            item.plan.toLowerCase().includes(itemToFilter)
        );
        dispatch(booksFilteredList(results));
      }
      if (from === "free books plan") {
        let info = filtrationFree.filter(
          (item) =>
            item.name.toLowerCase().includes(itemToFilter) ||
            item.author.toLowerCase().includes(itemToFilter) ||
            item.plan.toLowerCase().includes(itemToFilter)
        );
        dispatch(freeBooksFilteredList(info));
      }
    }
  };

  const clearInput = () => {
    setSearchValue("");
    if (to === "books Array") {
      dispatch(booksFilteredList(filtrationList));
    } else {
      dispatch(freeBooksFilteredList(filtrationFree));
    }
  };

  const cancelMode = () => {
    if (to === "books Array") {
      dispatch(booksFilteredList(filtrationList));
    } else {
      dispatch(freeBooksFilteredList(filtrationFree));
    }
    setcurrentSelectValue("");
  };

  const selectFunction = (e) => {
    dispatch(loadLottieAnnimation(false));

    setcurrentSelectValue(e);
    if (to === "books Array") {
      if (e == "#/free") {
        setChoiceOnPlanType(true);

        let res = filtrationList.filter((item) =>
          item.plan.toLowerCase().includes("free")
        );
        dispatch(booksFilteredList(res));
      } else {
        setChoiceOnPlanType(false);

        let res = filtrationList.filter((item) =>
          item.plan.toLowerCase().includes("premium")
        );
        dispatch(booksFilteredList(res));
      }
    }
    if (from === "free books plan") {
      if (user.user.plan == "free" && e == "#/free") {
        let res = filtrationFree.filter((item) =>
          item.plan.toLowerCase().includes("free")
        );
        dispatch(freeBooksFilteredList(res));
      } else if (
        user.user.plan == "free" &&
        user.user.isRequestingAccess === false &&
        e == "#/premium"
      ) {
        navigate("/upgradetopremium");
      } else if (
        user.user.plan == "free" &&
        e == "#/premium" &&
        user.user.isRequestingAccess === true
      ) {
        navigate("/pending");
      }
    }
  };
  return (
    <div className={`containerRow ${styles.header}`}>
      <SideBar
        openSideBar={toggleSideMenu}
        show={toggleSideMenu}
        onHide={() => settoggleSideMenu(false)}
      />
      <div className={styles.headeritleContainer}>
        <p className={`display-6 `}>{title} </p>
      </div>
      <div className={`${styles.hideContainer}`}>
        <div
          className={`${styles.inputContainer} d-flex 
 
      `}
        >
          <i
            className={`fas fa-search  containerCenter`}
            value={searchValue}
          ></i>
          {currentSelectValue.length > 0 ? (
            <div className={`${styles.selectContainer} containerCenter`}>
              {currentSelectValue === "#/free" ? (
                <div className={`${styles.free} ${styles.mode}`}>
                  <span>Basic</span>
                  <div className={styles.cancelFree}>
                    <i
                      onClick={cancelMode}
                      className={`fas fa-times pr-3 d-flex-end  ${styles.cross}`}
                    ></i>
                  </div>
                </div>
              ) : (
                <div
                  className={`containerRow ${styles.premium} ${styles.mode}`}
                >
                  <span>Premium</span>
                  <i
                    onClick={cancelMode}
                    className={`fas fa-times pr-3 d-flex-end  ${styles.cross}`}
                  ></i>
                </div>
              )}
            </div>
          ) : (
            <input
              type="text"
              value={searchValue}
              onChange={(e) => search(e)}
              className={styles.input}
              placeholder="Search..."
            />
          )}
          {searchValue.length >= 1 ? (
            <i
              className={`fas fa-times pr-3 containerCenter  ${styles.cross}`}
              onClick={clearInput}
            ></i>
          ) : (
            <Dropdown
              style={{ boxShadow: "none" }}
              onSelect={(e) => selectFunction(e)}
            >
              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
                style={{
                  fontSize: "25px",
                  outline: "none",
                }}
                variant="white"
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/free">Basic </Dropdown.Item>
                <Dropdown.Item href="#/premium">Premium </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header1;

const SideBar = ({ openSideBar }) => {
  return (
    <div
      className={
        openSideBar ? `${styles.showSideMenu}` : `${styles.hideSideMenu}`
      }
    >
      Alice Ndeh
    </div>
  );
};
