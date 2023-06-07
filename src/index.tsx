import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  Middleware,
} from "redux";
import thunk from "redux-thunk";
import { Provider, useDispatch } from "react-redux";
import reducer from "./reducers";
import logger from "redux-logger";

// if there are not in production mode show logger from redux //
let middlewares: Middleware[] = [thunk];

if (true || process.env.REACT_APP_IS_PRODUCTION != "1") {
  middlewares.push(logger);
}
export const store = createStore(reducer, applyMiddleware(...middlewares));
// hook to solve dispatch() when useDispatch();
export type AppDispatch = typeof store.dispatch;
export const useAppispatch = () => useDispatch<AppDispatch>();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
