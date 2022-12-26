import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    getBlogs: (state, action) => {
      action.payload.reverse();
      return action.payload;
    },

    addBlog: (state, action) => {
      state.unshift(action.payload);
    },

    updateBlog: (state, action) => {
      const { _id, blog } = action.payload;

      const index = state.findIndex((blog) => blog._id === _id);

      state[index] = blog;
    },

    deleteBlog: (state, action) => {
      const _id = action.payload;
      state = state.filter((blog) => {
        return blog._id !== _id;
      });

      return state;
    },
  },
});

export const { getBlogs, updateBlog, deleteBlog, addBlog } = blogSlice.actions;
export default blogSlice.reducer;
