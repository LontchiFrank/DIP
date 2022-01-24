import {
  ADMIN_GETS_ALL_USERS_REQUEST,
  ADMIN_GETS__ALL_STATISTICS_DATA,
  ADMIN_GETS_ALL_USERS,
  IS_LOADING,
  SET_ERROR,
  CURRENT_BOOK,
  ALL_BOOKS,
} from "../ActionType";

const adminGetsUsersequest = (users) => {
  return {
    type: ADMIN_GETS_ALL_USERS_REQUEST,
    payload: users,
  };
};

const adminGetsStatisticsData = (data) => {
  return {
    type: ADMIN_GETS__ALL_STATISTICS_DATA,
    payload: data,
  };
};

const loadingState = (val) => {
  return {
    type: IS_LOADING,
    payload: val,
  };
};

const adminGetsAllUsers = (users) => {
  return {
    type: ADMIN_GETS_ALL_USERS,
    payload: users,
  };
};

const errorDetected = (err) => {
  {
    return {
      type: SET_ERROR,
      payload: err,
    };
  }
};

const currentlyAddedBook = (book) => {
  return {
    type: CURRENT_BOOK,
    payload: book,
  };
};

const getAllBooks = (books) => {
  return {
    type: ALL_BOOKS,
    payload: books,
  };
};

export {
  adminGetsUsersequest,
  adminGetsStatisticsData,
  adminGetsAllUsers,
  loadingState,
  errorDetected,
  currentlyAddedBook,
  getAllBooks,
};
