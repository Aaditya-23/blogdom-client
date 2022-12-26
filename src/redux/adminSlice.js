import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: null,
    token: null,
    isVerified: "pending",
  },
  reducers: {
    setOldAdmin: (state) => {
      const admin = JSON.parse(localStorage.getItem("admin"));
      const token = JSON.parse(localStorage.getItem("token"));

      state.admin = admin;
      state.token = token;
      state.isVerified = "pending";
    },

    verifyAdmin: (state, action) => {
      state.isVerified = action.payload;
    },

    setNewAdmin: (state, action) => {
      const { admin, token } = action.payload;

      localStorage.setItem("admin", JSON.stringify(admin));
      localStorage.setItem("token", JSON.stringify(token));

      state.admin = admin;
      state.token = token;
      state.isVerified = true;
    },

    destroyAdmin: (state) => {
      localStorage.clear();

      state.admin = null;
      state.token = null;
      state.isVerified = false;
    },
  },
});

export const { setOldAdmin, verifyAdmin, setNewAdmin, destroyAdmin } =
  adminSlice.actions;
export default adminSlice.reducer;
