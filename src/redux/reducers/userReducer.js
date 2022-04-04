import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  IS_LOADING,
  LOAD_USER,
  UPLOAD_SPINNER,
  CURRENT_TASK,
  UPDATED_USER_INFO,
} from "../ActionType";

const initialState = {
  // token: localStorage.getItem("token"),

  newTask: [],
  bookSPinner: false,
  isAuthenticated: null,
  Loading: false,
  user: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        Loading: false,
      };
    case LOAD_USER:
    case UPDATED_USER_INFO:
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
      };

    case REGISTER_FAILED:
    case AUTH_ERROR:
    case LOGIN_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        Loading: false,
        user: null,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        Loading: false,
        user: null,
      };
    case IS_LOADING:
      return {
        ...state,
        Loading: true,
      };
    case CURRENT_TASK:
      return {
        ...state,
        bookSPinner: false,
        newTask: payload,
      };
    case UPLOAD_SPINNER:
      return {
        ...state,
        bookSPinner: payload,
        error: null,
      };

    default:
      return state;
  }
}
