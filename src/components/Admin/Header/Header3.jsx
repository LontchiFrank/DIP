import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {
  usersFilteredList,
  booksFilteredList,
  tasksFilteredList,
} from "../../../redux/actions/adminAction";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/adminAction";

function Header3({ filtrationTask, hidden, title, filtrationList, from }) {
  const [searchValue, setSearchValue] = useState("");
  const [currentSelectValue, setcurrentSelectValue] = useState("");
  const [toggleSideMenu, settoggleSideMenu] = useState(false);

  const dispatch = useDispatch();

  const search = (e) => {
    setSearchValue(e.target.value);
    let newText = e.target.value.toLowerCase();
    if (newText !== "") {
      let itemToFilter = newText.toLowerCase();
      if (from === "Task Array") {
        let result = filtrationTask.filter(
          (item) =>
            item.name.toLowerCase().includes(itemToFilter) ||
            item.email.toLowerCase().includes(itemToFilter) ||
            item.plan.toLowerCase().includes(itemToFilter)
        );
        dispatch(tasksFilteredList(result));
      }
    }
  };
  const clearInput = () => {
    setSearchValue("");
    if (from === "Task Array") {
      dispatch(tasksFilteredList(filtrationTask));
    }
  };

  const cancelMode = () => {
    if (from === "Task Array") {
      dispatch(tasksFilteredList(filtrationTask));
    }
    setcurrentSelectValue("");
  };

  const selectFunction = (e) => {
    setcurrentSelectValue(e);
    if (from === "Task Array") {
      if (e == "#/free") {
        let res = filtrationTask.filter((item) =>
          item.plan.toLowerCase().includes("free")
        );
        dispatch(booksFilteredList(res));
      } else {
        let res = filtrationTask.filter((item) =>
          item.plan.toLowerCase().includes("premium")
        );
        dispatch(booksFilteredList(res));
      }
    }
  };

  const [menu, setMenu] = useState(false);
  const handleDropdown = () => {
    setMenu(!menu);
  };
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={`containerRow ${styles.header}`}>
      <div className={styles.headeritleContainer}>
        <p className={`display-6 `}>{title} </p>
        <i
          className={`fas fa-bars hide ${styles.menu}`}
          onClick={handleDropdown}
        ></i>
      </div>
      {menu ? (
        <div
          className="container p-0"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        >
          <li className="nav-item pt-2  pr-4" style={{ listStyle: "none" }}>
            <Link
              to="/users"
              className="nav-link actived"
              aria-current="page"
              style={{ color: "#222f3e", fontWeight: "700" }}
            >
              All Users
            </Link>
          </li>
          <li className="nav-item pt-2  pr-4" style={{ listStyle: "none" }}>
            <Link
              to="/books"
              className="nav-link actived"
              aria-current="page"
              style={{ color: "#222f3e", fontWeight: "700" }}
            >
              All Books
            </Link>
          </li>
          <li className="nav-item pt-2  pr-4" style={{ listStyle: "none" }}>
            <Link
              to="/upload"
              className="nav-link actived"
              aria-current="page"
              style={{ color: "#222f3e", fontWeight: "700" }}
            >
              Upload Book Or Video
            </Link>
          </li>
          <li className="nav-item pt-2  pr-4" style={{ listStyle: "none" }}>
            <Link
              to="/profile"
              className="nav-link actived"
              aria-current="page"
              style={{ color: "#222f3e", fontWeight: "700" }}
            >
              Profile
            </Link>
          </li>
          <li className="nav-item pt-2  pr-4" style={{ listStyle: "none" }}>
            <Link
              to="/alltask"
              className="nav-link actived"
              aria-current="page"
              style={{ color: "#222f3e", fontWeight: "700" }}
            >
              Task
            </Link>
          </li>
          <li className="nav-item pt-2  pr-4" style={{ listStyle: "none" }}>
            <div
              onClick={onLogout}
              style={{ color: "#222f3e", fontWeight: "700" }}
            >
              <i
                className={`fas fa-sign-out-alt fa-2x ${styles.logout} icon`}
              ></i>
              Log Out
            </div>
          </li>
        </div>
      ) : null}

      <div className={`${hidden && styles.hideContainer}`}>
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
            <Dropdown onSelect={(e) => selectFunction(e)}>
              <Dropdown.Toggle
                style={{
                  fontSize: "25px",
                  outline: "none",
                }}
                variant="white"
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/free">Free </Dropdown.Item>
                <Dropdown.Item href="#/premium">Premium </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header3;

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
