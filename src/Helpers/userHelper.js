import axios from "axios";
import { useDispatch } from "react-redux";
import setAuthToken from "../components/utils/setAuthToken";
import { loadUser } from "../redux/actions/userAction";
// import { Alert } from "../components/Alert/Alert";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const _registerUser = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_URL}/users/CreateAccount`,
      data,
      config
    );
    loadUser();
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

export const login = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_URL}/users/login`,
      data,
      config
    );
    loadUser();
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

const _userRequestFreePlan = async () => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_URL}/usersFunctionality/RequestPlanUpdate`,
      {
        isRequestingAccess: true,
        planType: "free",
      },
      config
    );
    return res.data;
  } catch (err) {
    console.log(err.response.data.message, "error");

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

const _addTask = async (data) => {
  try {
    let res = await axios.post(
      `${process.env.REACT_APP_URL}/weeklyForm/CreateWeeklyForm`,
      data
    );
    console.log(res.data, "from server");
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

const _userRequestPremiumPlan = async () => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_URL}/usersFunctionality/RequestPlanUpdate`,
      {
        isRequestingAccess: true,
        planType: "premium",
      },
      config
    );
    return res.data;
  } catch (err) {
    console.log(err.response.data.message, "error");
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

const _updateUserInfo = async (data) => {
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
export {
  _registerUser,
  _loadeCurrentlyLogedInUser,
  _userRequestFreePlan,
  _userRequestPremiumPlan,
  _updateUserInfo,
  _addTask,
};
