import {
  SUPER_ADMIN_GETS_ALL_USERS_REQUEST,
  SUPER_ADMIN_GETS_ALL_USERS,
  SUPER_ADMIN_GETS__ALL_STATISTICS_DATA,
  IS_LOADING,
  SET_ERROR,
  CURRENT_BOOK,
  ALL_BOOKS,
  UPLOAD_SPINNER,
  FILTRATION_RESULT,
  FILTERED_BOOKS,
  LOGOUT,
  ALL_FREE_BOOKS,
  FILTERED_FREE_BOOKS,
  LOAD_ADMIN,
  UPDATED_ADMIN_INFO,
  SUPER_ADMIN_GETS_ALL_ADMIN,
  FILTRATION_ADMIN_RESULT,
  FILTRATION_USER_RESULT,
  CREATE_ADMIN,
} from "../ActionType";

const INITIAL_STATE = {
  incomingUsersRequest: [],
  statisticsData: [],
  admins: [],
  users: [],
  loading: false,
  error: null,
  newBook: [],
  allBooks: [],
  allFreeBooks: [],
  bookSPinner: false,
  usersFilteredList: [],
  adminFilteredList: [],
  booksFilteredList: [],
  freeBooksFilteredList: [],
};

const getUsersRequest = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SUPER_ADMIN_GETS_ALL_USERS_REQUEST:
      return {
        ...state,
        incomingUsersRequest: payload.user,
        loading: false,
        error: null,
      };

    case SUPER_ADMIN_GETS_ALL_USERS:
      return {
        ...state,
        users: payload.allUsers,
        loading: false,
        error: null,
      };
    case SUPER_ADMIN_GETS_ALL_ADMIN:
      return {
        ...state,
        admins: payload.admins,
        loading: false,
        error: null,
      };
    case CREATE_ADMIN:
      return {
        ...state,
        admins: { payload },
      };
    case LOAD_ADMIN:
    case UPDATED_ADMIN_INFO:
      return {
        ...state,
        admins: payload.admin,
      };

    case IS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }
    case CURRENT_BOOK:
      return {
        ...state,
        bookSPinner: false,
        newBook: payload,
      };
    case ALL_BOOKS:
      return {
        ...state,
        loading: false,
        allBooks: payload.books,
      };
    case ALL_FREE_BOOKS:
      return {
        ...state,
        loading: false,
        allFreeBooks: payload.books,
      };
    case UPLOAD_SPINNER:
      return {
        ...state,
        bookSPinner: payload,
        error: null,
      };

    case FILTRATION_USER_RESULT:
      return {
        ...state,
        usersFilteredList: payload,
      };
    case FILTRATION_ADMIN_RESULT:
      return {
        ...state,
        adminFilteredList: payload,
      };
    case FILTERED_BOOKS:
      return {
        ...state,
        booksFilteredList: payload,
      };
    case FILTERED_FREE_BOOKS:
      return {
        ...state,
        freeBooksFilteredList: payload,
      };
    case LOGOUT:
      window.location.replace("/");
      localStorage.removeItem("token");
    default:
      return state;
  }
};

export default getUsersRequest;
