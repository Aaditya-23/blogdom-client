import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteBlog } from "../../services/api";
import { deleteBlog as reduxDeleteBlog } from "../../redux/BlogSlice";
import { destroyAdmin } from "../../redux/adminSlice";
import formatDate from "../../utils/formatDate";
import { motion } from "framer-motion";
import "./styles.css";

export default function BlogCard(props) {
  const { token, isVerified } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const {
    blog: { _id, title, createdAt, updatedAt, readTime },
  } = props;

  const handleDelete = (e) => {
    e.preventDefault();
    deleteBlog(token, { _id })
      .then(() => {
        dispatch(reduxDeleteBlog(_id));
      })
      .catch(() => {
        dispatch(destroyAdmin());
        alert("Session expired");
        navigate("/adminlogin");
      });
  };

  const variants = {
    initial: {
      x: 0,
      y: 0,
    },
    animate: {
      x: 2,
      y: -2,
    },
  };

  return (
    <div className="blogCard-background">
      <motion.div
        className="blogCard"
        variants={variants}
        initial="initial"
        animate={isHovered ? "animate" : "initial"}
        transition={{ type: "spring", bounce: 0.3 }}
      >
        <Link
          to={`/blog/${_id}`}
          className="blog-title"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {title}
        </Link>

        <div className="blog-date">
          {formatDate(createdAt)}
          {updatedAt && (
            <> &nbsp; &#183; &nbsp; updated {formatDate(updatedAt)}</>
          )}
        </div>

        <div className="blog-actions">
          <span className="material-symbols-outlined">schedule</span>
          <div className="blog-actions-text">{readTime} min read</div>
          {isVerified === true && (
            <div className="admin-blogActions">
              <span
                className="material-symbols-outlined blog-deleteIcon"
                onClick={handleDelete}
              >
                delete
              </span>

              <Link to={`/updateblog/${_id}`}>
                <span className="material-symbols-outlined">edit</span>
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
