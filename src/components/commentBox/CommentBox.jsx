import { useDispatch, useSelector } from "react-redux";
import { updateBlog } from "../../redux/blogSlice";
import { deleteComment, postComment } from "../../services/api";
import formatDate from "../../utils/formatDate";
import "./styles.css";

export default function CommentBox(props) {
  const { comments, blogId } = props;

  const { token, isVerified } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      author: e.target.author.value,
      body: e.target.body.value,
      _id: blogId,
    };

    const controller = new AbortController();

    postComment(controller.signal, data).then((res) => {
      const { blog } = res;

      dispatch(updateBlog({ _id: blogId, blog }));
      e.target.author.value = null;
      e.target.body.value = null;
    });
  };

  const handleDelete = (commentId) => {
    const data = {
      blogId,
      commentId,
    };

    const controller = new AbortController();

    deleteComment(controller.signal, data, token).then((res) => {
      const { blog } = res;
      dispatch(updateBlog({ _id: blogId, blog }));
    });
  };

  return (
    <div className="comments-wrapper">
      <form className="commentEditor" method="POST" onSubmit={handleFormSubmit}>
        <input
          required
          type="text"
          name="author"
          maxLength={30}
          placeholder="Your Name"
          className="new-comment-author"
        />
        <textarea
          required
          name="body"
          placeholder="Add Discussion"
          className="new-comment-body"
        ></textarea>
        <button type="submit" className="comment-submitButton">
          Post
        </button>
      </form>

      <h3>Comments</h3>

      <div className="comments">
        {comments.map((comment, index) => {
          const { _id, author, body, createdAt } = comment;

          return (
            <div key={index} className="comment">
              <div className="comment-info-wrapper">
                <span className="material-symbols-outlined">person_filled</span>
                <div className="comment-info">
                  <span className="comment-author">{author}</span>
                  <span className="comment-date">{formatDate(createdAt)}</span>
                </div>
                {isVerified === true && (
                  <span
                    className="material-symbols-outlined comment-deleteIcon"
                    onClick={() => {
                      handleDelete(_id);
                    }}
                  >
                    delete
                  </span>
                )}
              </div>

              <p className="comment-body">{body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
