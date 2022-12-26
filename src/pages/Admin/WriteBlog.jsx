import { useEffect, useState } from "react";
import Navbar from "../../layouts/navbar/Navbar";
import Editor from "../../components/editor/Editor";
import { postBlog } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import "./writeBlog.css";
import { addBlog } from "../../redux/blogSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function WriteBlog() {
  const { token, isVerified } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const getReadTime = () => {
    const target = document.querySelector(".ql-editor");
    const text = target.innerText.trim();
    let wordCount = 0;

    for (let i of text) if (i !== "\n" && i !== " ") wordCount++;

    const wpm = 250;

    return Math.ceil(wordCount / wpm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      alert("Body is empty");
      return;
    }

    const data = {
      title: e.target.title.value,
      body: value,
      readTime: getReadTime(),
    };

    const controller = new AbortController();
    postBlog(controller.signal, token, data).then((res) => {
      const { blog } = res;
      dispatch(addBlog(blog));

      e.target.title.value = null;
      setValue("");
    });
  };

  useEffect(() => {
    if (isVerified === false) navigate("/adminlogin");
  }, [isVerified]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="writeBlogPage"
    >
      <Navbar />

      <form
        className="writeBlog-form"
        method="POST"
        onSubmit={handleFormSubmit}
      >
        <input
          required
          type="text"
          name="title"
          placeholder="Title"
          className="writeBlog-title"
        />

        <Editor value={value} setValue={setValue} />

        <button type="submit" className="blog-submitButton">
          Post
        </button>
      </form>
    </motion.div>
  );
}
