import { combineReducers } from "redux";
import alert from "./alert";
import loans from "./loans";

export default combineReducers({ alert, loans });
