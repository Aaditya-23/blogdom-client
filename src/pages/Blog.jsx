import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentBox from "../components/commentBox/CommentBox";
import Navbar from "../layouts/navbar/Navbar";
import formatDate from "../utils/formatDate";
import { motion } from "framer-motion";
import "./blog.css";

export default function Blog() {
  const { id } = useParams();
  const { title, body, readTime, createdAt, updatedAt, comments } =
    useSelector((state) => state.blogs.filter((blog) => blog._id === id))[0] ||
    {};

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  };

  useEffect(() => {
    const target = document.querySelector(".blogContent");
    if (target) target.innerHTML = body;
  }, [body]);

  return title ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="blogpage"
    >
      <Navbar />

      <div className="blog">
        <div className="blogTitle">{title}</div>

        <div className="blogDate">
          {formatDate(createdAt)}
          {updatedAt && (
            <> &nbsp; &#183; &nbsp; updated {formatDate(updatedAt)}</>
          )}
        </div>

        <div className="blogActions">
          <span className="material-symbols-outlined">schedule</span>{" "}
          <div className="blog-read-time">{readTime} min read</div>
          <button className="blog-shareIcon" onClick={copyToClipboard}>
            <span className="material-symbols-outlined ">share</span>
          </button>
        </div>

        <p className="blogContent"></p>

        <div className="divider"></div>

        <div>
          <span className="leaveReply">Leave a Reply</span>
          <CommentBox comments={comments} blogId={id} />
        </div>
      </div>
    </motion.div>
  ) : null;
}
