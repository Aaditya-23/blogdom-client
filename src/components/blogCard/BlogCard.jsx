import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import "./styles.css";

export default function BlogCard(props) {
  const {
    blog: { _id, title, body, createdAt, updatedAt, readTime },
  } = props;

  return (
    <Link to={`/blog/${_id}`} className="blogCard">
      <div className="blog-title">{title}</div>

      <div className="blog-date">
        {formatDate(createdAt)}
        {updatedAt && (
          <> &nbsp; &#183; &nbsp; updated on {formatDate(updatedAt)}</>
        )}
      </div>

      <div className="blog-shortContent">
        {body.slice(0, 400)} &nbsp;&nbsp;<span className="ellipsis">...</span>
      </div>

      <div className="blog-actions">
        <span className="material-symbols-outlined">favorite</span>
        <div className="blog-actions-text">{readTime} min read</div>
      </div>
    </Link>
  );
}
