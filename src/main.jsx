import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/global.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./redux/blogSlice.js";
import adminReducer from "./redux/adminSlice.js";

const store = configureStore({
  reducer: {
    admin: adminReducer,
    blogs: blogReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
