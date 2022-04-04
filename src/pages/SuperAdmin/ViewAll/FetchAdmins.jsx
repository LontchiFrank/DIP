import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminCard from "./AdminCard";
import { superadminGetsAdmin } from "../../../redux/actions/superAction";
import { _getAllAdmins } from "../../../Helpers/adminHelper";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "react-lottie";
import animationData from "../../../annimations/89683-user-reviews.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function FetchAdmins() {
  const [data, setData] = useState([]);
  const usersData = useSelector((state) => state.superAdmins);
  const [loading, setloading] = useState(false);

  const { adminFilteredList } = usersData;
  const dispatch = useDispatch();

  useEffect(() => {
    setloading(true);
    _getAllAdmins().then((data) => {
      setData(data.admins);
      setloading(false);
      return dispatch(superadminGetsAdmin(data));
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div className={`containerCenter spinnerContainer`}>
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          {adminFilteredList && adminFilteredList.length > 0 ? (
            <div>
              {adminFilteredList.map((user, index) => (
                <div key={index}>
                  <AdminCard user={user} />
                </div>
              ))}
            </div>
          ) : (
            <div>
              {data > 0 ? (
                data && data.map((data) => <AdminCard user={data} />)
              ) : (
                <div className="containerColumn fw-bold ">
                  <Lottie options={defaultOptions} height={400} width={"70%"} />
                  <p
                    style={{
                      fontSize: 21,
                    }}
                  >
                    All Admins will appear hear
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FetchAdmins;
