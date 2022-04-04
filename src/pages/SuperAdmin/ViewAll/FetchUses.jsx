import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { SuperAdminLayout } from "../..";
import { Header, PendingCard, PlanCard, Unexpected } from "../../../components";
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

function FetchUses() {
  const usersData = useSelector((state) => state.superAdmins);
  const { incomingUsersRequest, users, loading, usersFilteredList } = usersData;

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
        // console.log(data);
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

      setpendinDataSet(pending);
    }
  }, [usersFilteredList]);

  return (
    <div>
      {loading ? (
        <div className={`containerCenter spinnerContainer`}>
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          {users.length > 0 || incomingUsersRequest.length > 0 ? (
            <div>
              {usersFilteredList.length > 0 ? (
                <div>
                  <div>
                    {pendinDataSet.length > 0 &&
                      pendinDataSet.map((user, index) => (
                        <div key={index}>
                          <PendingCard user={user} index={index} />
                        </div>
                      ))}
                  </div>
                  <div></div>
                  <div>
                    {usersFilteredList.map((user, index) => (
                      <div key={index}>
                        <PlanCard user={user} />
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
                        <div key={index}>
                          <PendingCard user={user} index={index} />
                        </div>
                      ))}
                  </div>
                  <div>
                    {typeof users !== undefined &&
                      users.length > 0 &&
                      users.map((user, index) => (
                        <div key={index}>
                          <PlanCard user={user} />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="containerColumn fw-bold ">
              <Lottie options={defaultOptions} height={400} width={"70%"} />
              <p
                style={{
                  fontSize: 21,
                }}
              >
                All Users will appear hear
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FetchUses;
