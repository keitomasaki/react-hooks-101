import { combineReducers } from "redux";
import events from "./events";
import operationLog from "./operationLog";

export default combineReducers({
  events,
  operationLog,
});
