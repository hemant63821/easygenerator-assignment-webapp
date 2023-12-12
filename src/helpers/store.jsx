import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../redux/reducers/index";

const loggerMiddleware = createLogger();
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;
