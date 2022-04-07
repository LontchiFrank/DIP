import React, { useState, useEffect } from "react";
import { AdminLayout } from "../../../pages";
import { Header, PendingCard, PlanCard, Unexpected } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  adminGetsUsersequest,
  adminGetsAllUsers,
  loadingState,
  errorDetected,
} from "../../../redux/actions/adminAction";
import {
  _getPlanChangeRequests,
  _getAllUsers,
} from "../../../Helpers/adminHelper";
import { _loadeCurrentlyLogedInUser } from "../../../Helpers/userHelper";
import { loadUser } from "../../../redux/actions/userAction";
import styles from "./AllUsers.module.css";

function AllUsers() {
  const usersData = useSelector((state) => state.admin);
  const { incomingUsersRequest, users, error, loading, usersFilteredList } =
    usersData;

  const [pendinDataSet, setpendinDataSet] = useState([]);
  const [userDataSet, setuserDataSet] = useState([]);
  const dispatch = useDispatch();

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
      console.log(pending, "pending`");

      setpendinDataSet(pending);
    }
  }, [usersFilteredList]);

  return (
    <AdminLayout>
      <Header
        title={"Users"}
        from="user Array"
        filtrationList={[...incomingUsersRequest, ...users]}
      />
      {error != null ? (
        <Unexpected />
      ) : (
        <div className={`${styles.container}`}>
          {loading ? (
            <div className={`containerCenter spinnerContainer`}>
              <div className="spinner"></div>
            </div>
          ) : (
            <div style={{ width: "100%" }}>
              {usersFilteredList.length > 0 ? (
                <div>
                  <div style={{ width: "100%" }}>
                    {pendinDataSet.length > 0 &&
                      pendinDataSet.map((user, index) => (
                        <div style={{ width: "100%" }} key={index}>
                          <PendingCard user={user} index={index} />
                        </div>
                      ))}
                  </div>
                  <div>
                    {userDataSet.length > 0 &&
                      userDataSet.map((user, index) => (
                        <div style={{ width: "100%" }} key={index}>
                          <PlanCard user={user} index={index} />
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    {typeof incomingUsersRequest !== undefined &&
                      incomingUsersRequest.length > 0 &&
                      incomingUsersRequest.map((user, index) => (
                        <div style={{ width: "100%" }} key={index}>
                          <PendingCard user={user} index={index} />
                        </div>
                      ))}
                  </div>
                  <div>
                    {typeof users !== undefined &&
                      users.length > 0 &&
                      users.map((user, index) => (
                        <div style={{ width: "100%" }} key={index}>
                          <PlanCard user={user} />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </AdminLayout>
  );
}

export default AllUsers;
