import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";
import superReducer from "./superReducer";

const reducers = combineReducers({
  admin: adminReducer,
  user: userReducer,
  superAdmins: superReducer,
});

export default reducers;
