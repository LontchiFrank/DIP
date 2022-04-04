import axios from "axios";

import setAuthToken from "../components/utils/setAuthToken";
const config = {
  headers: {
    "Content-Type": "application/json",
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
    let totalViews = await axios.get(
      `${process.env.REACT_APP_URL}/admin/books/GetAllViews`
    );
    let res = await axios.get(
      `${process.env.REACT_APP_URL}/allUsers/statistics`
    );

    return { statistic: res.data, views: totalViews };
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
      planType: "none",
    };
    let res = await axios.put(
      `${process.env.REACT_APP_URL}/allUsers/UpdateUsersPlan/${userID}`,
      data
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
      data
    );
    console.log(res.data);
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
    let res = await axios.post(
      `${process.env.REACT_APP_URL}/admin/books/CreateBook`,
      data
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

const _viewAllBooks = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/admin/books/GetAllBook`
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

const _viewAllTasks = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/weeklyForm/GetAllWeeklyFeedbacks`
    );
    return res.data;
    console.log(res.data);
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

const _deleteBook = async (bookID) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_URL}/admin/books/delete/${bookID}`
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

const _getFreeBooks = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/admin/books/GetAllFreeBooks`
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
const _updateAdminInfo = async (data) => {
  try {
    let res = await axios.put(
      `${process.env.REACT_APP_URL}/users/UpdateProfile`,
      data,
      config
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return {
        errorMessage: err.response.data.msg,
        code: 400,
      };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};
const _loadeCurrentlyLogedInUser = async () => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}/users/LoadUser`);
    return res.data;
  } catch (err) {
    return err;
  }
};

const _getAllAdmins = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/superAdmin/getAllAdmin`
    );
    console.log(res.data, "data heee");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const _removeAdmin = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/superAdmin/deleteAdmin/${id}`
    );
    console.log(res.data, "data heee");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
export {
  _getPlanChangeRequests,
  _getAllUsers,
  _getAllStatistics,
  _addABook,
  _upgradeUsersPlan,
  _denyUsersPlanUpgrade,
  _viewAllBooks,
  _viewAllTasks,
  _deleteBook,
  _getFreeBooks,
  _updateAdminInfo,
  _loadeCurrentlyLogedInUser,
  _getAllAdmins,
  _removeAdmin,
};
