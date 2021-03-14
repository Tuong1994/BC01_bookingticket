import { applyMiddleware, combineReducers, createStore } from "redux";
import { PhimReducer } from "./reducers/PhimReducer";
import reduxThunk from "redux-thunk";
import { LoadingReducer } from "./reducers/LoadingReducer";

// state tổng của ứng dụng
const rootReducer = combineReducers({
  PhimReducer,
  LoadingReducer,
});

// appply thunk để xử lý dispatch API
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
