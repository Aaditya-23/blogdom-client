import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CommentBox from "../components/commentBox/CommentBox";
import Navbar from "../layouts/navbar/Navbar";
import formatDate from "../utils/formatDate";
import "./blog.css";

export default function Blog() {
  const { id } = useParams();
  const { title, body, categories, readTime, createdAt, updatedAt } =
    useSelector((state) => state.blogs.filter((blog) => blog._id === id))[0] ||
    {};

  useEffect(() => {
    const target = document.querySelector(".blogContent");
  }, []);

  return (
    title && (
      <div className="blogpage">
        <Navbar />

        <div className="blog">
          <div className="blogTitle">{title}</div>

          <div className="blogDate">
            {formatDate(createdAt)}
            {updatedAt && (
              <> &nbsp; &#183; &nbsp; updated on {formatDate(updatedAt)}</>
            )}
          </div>

          <div className="blogCategories">
            {categories.map((category, index) => (
              <Link key={index} to="#" className="blogCategory">
                # {category}
              </Link>
            ))}
          </div>

          <div className="blogActions">
            <span className="material-symbols-outlined">favorite</span>
            <div className="blog-read-time">{readTime} min read</div>
            <span className="material-symbols-outlined blog-shareIcon">
              share
            </span>
          </div>

          <p className="blogContent">{body}</p>

          <div className="divider"></div>

          <div className="comment">
            <span className="leaveReply">Leave a Reply</span>
            <CommentBox />
          </div>
        </div>
      </div>
    )
  );
}
