import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    "dip-token": localStorage.getItem("token"),
  },
};

const _getPlanChangeRequests = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/allUsers/AllRequest`
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

const _getAllUsers = async () => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_URL}/allUsers/GetAllUsers`
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

const _getAllStatistics = async () => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_URL}/allUsers/statistics`
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

const _upgradeUsersPlan = async (planType, userID) => {
  try {
    let data = {
      plan: planType,
      isRequestingAccess: false,
    };
    console.log(data, userID, "data");
    let res = await axios.put(
      `${process.env.REACT_APP_URL}/allUsers/UpdateUsersPlan/${userID}`,
      data,
      config
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

const _denyUsersPlanUpgrade = async (currentPlan, userID) => {
  try {
    let data = {
      planType: currentPlan,
      isRequestingAccess: false,
    };

    console.log(data, userID, "data");
    let res = await axios.put(
      `${process.env.REACT_APP_URL}/allUsers/UpdateUsersPlan/${userID}`,
      data,
      config
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

const _addABook = async (data) => {
  try {
    // let res = await axios.post(
    //   `${process.env.REACT_APP_URL}/admin/books/CreateBook`,
    //   config
    // );
    return data;
  } catch (err) {
    return err;
  }
};

export {
  _getPlanChangeRequests,
  _getAllUsers,
  _getAllStatistics,
  _addABook,
  _upgradeUsersPlan,
  _denyUsersPlanUpgrade,
};