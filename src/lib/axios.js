import axios from "axios";

export const axiosGet = async (args) => {
  try {
    const { url, token, signal } = args;
    const headers = token
      ? {
          authorization: `Bearer ${token}`,
        }
      : undefined;

    const res = await axios.get(url, {
      headers,
      signal,
    });

    return res;
  } catch (error) {
    throw error;
  }
};

export const axiosPost = async (args) => {
  try {
    const { url, data, token, signal } = args;
    const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

    const res = await axios.post(url, data, {
      headers,
      signal,
    });

    return res;
  } catch (error) {
    throw error;
  }
};
