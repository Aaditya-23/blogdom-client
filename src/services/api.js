import { axiosGet, axiosPost } from "../lib/axios";

export const fetchBlogs = async (signal) => {
  try {
    const args = {
      url: `${import.meta.env.VITE_API_URL}/blog/fetch-blogs`,
      signal,
    };

    const res = await axiosGet(args);
    return res.data.blogs;
  } catch (error) {
    return [];
  }
};
