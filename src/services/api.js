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

export const adminLogin = async (signal, data) => {
  try {
    const args = {
      url: `${import.meta.env.VITE_API_URL}/admin/login`,
      data,
      signal,
    };

    const res = await axiosPost(args);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export const verifyAdmin = async (token) => {
  try {
    const args = {
      url: `${import.meta.env.VITE_API_URL}/admin/verify`,
      token,
    };

    const res = (await axiosPost(args)).data.isVerified;
    return res;
  } catch (error) {
    return false;
  }
};

export const postBlog = async (signal, token, data) => {
  try {
    const args = {
      url: `${import.meta.env.VITE_API_URL}/blog/post-blog`,
      data,
      token,
      signal,
    };

    const res = await axiosPost(args);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export const deleteBlog = async (token, data) => {
  try {
    const args = {
      url: `${import.meta.env.VITE_API_URL}/blog/delete-blog`,
      data,
      token,
    };

    const res = await axiosPost(args);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export const updateBlog = async (token, data) => {
  try {
    const args = {
      url: `${import.meta.env.VITE_API_URL}/blog/update-blog`,
      data,
      token,
    };

    const res = await axiosPost(args);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export const postComment = async (signal, data) => {
  try {
    const args = {
      url: `${import.meta.env.VITE_API_URL}/blog/post-comment`,
      data,
      signal,
    };

    const res = await axiosPost(args);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export const deleteComment = async (signal, data, token) => {
  try {
    const args = {
      url: `${import.meta.env.VITE_API_URL}/blog/delete-comment`,
      data,
      signal,
      token,
    };

    const res = await axiosPost(args);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export const contact = async (data) => {
  try {
    const args = {
      url: `${import.meta.env.VITE_API_URL}/contact/contactus`,
      data,
    };

    const res = await axiosPost(args);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error.response;
  }
};
