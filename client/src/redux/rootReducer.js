import { combineReducers } from "redux";
import auth from "./reducers/auth";
import blog from "./reducers/blog";

const rootReducer = combineReducers({
  auth,
  blog
});

export default rootReducer;
