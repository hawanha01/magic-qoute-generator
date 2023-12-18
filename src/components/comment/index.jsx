import { useSelector } from "react-redux";

const Comment = ({ commentId }) => {
  const comments = useSelector((state) => state.comments.data);
  const comment = comments.find((comment) => comment.id === commentId);
  const current_user = useSelector((state) => state.current_user.data);
  return (
    <div>
      {comment.body}
      <span>
        {comment.user_id === current_user.id ? (
          <span>
            <button>edit</button>
            <button>delete</button>
          </span>
        ) : null}
      </span>
    </div>
  );
};
export default Comment;
