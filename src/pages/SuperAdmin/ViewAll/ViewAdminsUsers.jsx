import React, { useState, useEffect } from "react";
import styles from "./ViewAdminsUsers.module.css";
import { Route } from "react-router-dom";
import FetchAdmins from "./FetchAdmins";
import FetchUses from "./FetchUses";
import { Nav } from "react-bootstrap";
import { SuperAdminLayout } from "../..";
import { Header2 } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  adminGetsUsersequest,
  adminGetsAllUsers,
  loadingState,
  errorDetected,
} from "../../../redux/actions/superAction";
import Lottie from "react-lottie";
import animationData from "../../../annimations/89683-user-reviews.json";
import {
  _getPlanChangeRequests,
  _getAllUsers,
} from "../../../Helpers/adminHelper";
import { _loadeCurrentlyLogedInUser } from "../../../Helpers/userHelper";
import { loadUser } from "../../../redux/actions/userAction";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function ViewAdminsUsers() {
  const usersData = useSelector((state) => state.superAdmins);
  // const data = useSelector((state) => state.admin);
  // const { error, allBooks, allFreeBooks, loading, booksFilteredList } =
  //   usersData;
  const {
    incomingUsersRequest,
    allBooks,
    allFreeBooks,
    users,
    admins,
    loading,
    usersFilteredList,
  } = usersData;
  const [pendinDataSet, setpendinDataSet] = useState([]);
  const [userDataSet, setuserDataSet] = useState([]);

  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(null);
  useEffect(async () => {
    let isActive = await localStorage.getItem("IS_TOGGLE_ACTIVE");
    setToggle(isActive);
  }, []);

  useEffect(() => {
    console.log(toggle, "togglerrrr");
  }, [toggle]);

  useEffect(() => {
    dispatch(loadingState(true));
    _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
    _getPlanChangeRequests().then((data) => {
      if (data.code === 400) {
        return dispatch(errorDetected(data.errorMessage));
      } else {
        dispatch(adminGetsUsersequest(data));
      }
    });
    _getAllUsers().then((data) => {
      if (data.code === 400) {
        return dispatch(errorDetected(data.errorMessage));
      } else {
        dispatch(adminGetsAllUsers(data));
      }
    });
  }, []);

  useEffect(() => {
    if (usersFilteredList.length > 0) {
      let users = usersFilteredList.filter(
        (item) => item.isRequestingAccess === false
      );
      setuserDataSet(users);

      let pending = usersFilteredList.filter(
        (item) => item.isRequestingAccess === true
      );
      // console.log(pending, "pending`");

      setpendinDataSet(pending);
    }
  }, [usersFilteredList]);

  return (
    <SuperAdminLayout>
      <Header2
        title={"Admins & Users"}
        filtrationList={allBooks}
        allUsers={users}
        allAdmins={admins}
        from={"SA view all users"}
      />
      <Nav justify variant="tabs" defaultActiveKey="/all-admins-users">
        <Nav.Item>
          <Nav.Link
            style={{
              backgroundColor: toggle && "rgba(0,20,10,0.6)",
              color: toggle ? "#fff" : "#000",
            }}
            onClick={() => {
              setToggle(true);
              localStorage.setItem("IS_TOGGLE_ACTIVE", true);
              console.log("true", "users");
            }}
          >
            All Users
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{
              backgroundColor: toggle === false && "rgba(0,20,10,0.6)",
              color: toggle === false ? "#fff" : "#000",
            }}
            onClick={() => {
              setToggle(false);
              localStorage.setItem("IS_TOGGLE_ACTIVE", false);
              console.log("false", "admins");
            }}
          >
            Admins
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {toggle && toggle ? <FetchUses /> : <FetchAdmins />}
    </SuperAdminLayout>
  );
}

export default ViewAdminsUsers;
