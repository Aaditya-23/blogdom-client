import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    getBlogs: (state, action) => {
      return action.payload;
    },
  },
});

export const { getBlogs } = BlogSlice.actions;
export default BlogSlice.reducer;
