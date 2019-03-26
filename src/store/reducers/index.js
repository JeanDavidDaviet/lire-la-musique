import { combineReducers } from "redux";
import configReducer from "./config.reducer";
import tempoReducer from "./tempo.reducer";
import scaleReducer from "./scale.reducer";

export default combineReducers({ configReducer, scaleReducer, tempoReducer });
