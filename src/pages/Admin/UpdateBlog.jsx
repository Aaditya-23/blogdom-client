import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "../../components/editor/Editor";
import Navbar from "../../layouts/navbar/Navbar";
import { updateBlog } from "../../services/api";
import { updateBlog as reduxUpdateBlog } from "../../redux/blogSlice";
import { motion } from "framer-motion";
import "./updateBlog.css";

export default function UpdateBlog() {
  const { id } = useParams();

  const { title, body } =
    useSelector((state) => state.blogs.filter((blog) => blog._id === id)[0]) ||
    {};
  const { token, isVerified } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [value, setValue] = useState(body);

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
      _id: id,
      title: e.target.title.value,
      body: value,
      readTime: getReadTime(),
    };

    updateBlog(token, data)
      .then((res) => {
        const { blog } = res;
        dispatch(reduxUpdateBlog({ _id: id, blog }));

        e.target.title.value = null;
        setValue("");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (isVerified === false) navigate("/adminlogin");
  }, [isVerified]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="updateBlogPage"
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
          defaultValue={title}
          className="writeBlog-title"
        />

        <Editor value={value} setValue={setValue} />

        <button type="submit" className="blog-submitButton">
          Update
        </button>
      </form>
    </motion.div>
  );
}
