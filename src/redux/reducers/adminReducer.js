import {
  ADMIN_GETS_ALL_USERS_REQUEST,
  ADMIN_GETS_ALL_USERS,
  ADMIN_GETS__ALL_STATISTICS_DATA,
  IS_LOADING,
  SET_ERROR,
  CURRENT_BOOK,
  ALL_BOOKS,
  ALL_TASKS,
  UPLOAD_SPINNER,
  FILTRATION_RESULT,
  FILTERED_BOOKS,
  LOGOUT,
  ALL_FREE_BOOKS,
  FILTERED_FREE_BOOKS,
  CURRENT_TASK,
  LOAD_ADMIN,
  FILTRATION_TASKS,
  UPDATED_ADMIN_INFO,
  LOAD_ANNIMATION,
} from "../ActionType";

const INITIAL_STATE = {
  incomingUsersRequest: [],
  statisticsData: [],
  users: [],
  loading: false,
  error: null,
  newTasks: [],
  newBook: [],
  allBooks: [],
  allFreeBooks: [],
  bookSPinner: false,
  usersFilteredList: [],
  booksFilteredList: [],
  taskFilteredList: [],
  freeBooksFilteredList: [],
  shouldLoadLottieAnnimation: false,
};

const getUsersRequest = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADMIN_GETS_ALL_USERS_REQUEST:
      return {
        ...state,
        incomingUsersRequest: payload.user,
        loading: false,
        error: null,
      };

    case ADMIN_GETS_ALL_USERS:
      return {
        ...state,
        users: payload.allUsers,
        loading: false,
        error: null,
      };
    case ADMIN_GETS__ALL_STATISTICS_DATA:
      return {
        ...state,
        statisticsData: payload,
        loading: false,
        error: null,
      };
    case LOAD_ADMIN:
    case UPDATED_ADMIN_INFO:
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
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

    case ALL_TASKS:
      return {
        ...state,
        loading: false,
        newTasks: payload.books,
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

    case FILTRATION_RESULT:
      return {
        ...state,
        usersFilteredList: payload,
      };

    case FILTRATION_TASKS:
      return {
        ...state,
        taskFilteredList: payload,
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
    case LOAD_ANNIMATION:
      return {
        ...state,
        shouldLoadLottieAnnimation: payload,
      };

    case LOGOUT:
      window.location.replace("/");
      localStorage.removeItem("token");
    default:
      return state;
  }
};

export default getUsersRequest;
