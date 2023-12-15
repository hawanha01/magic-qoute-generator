import { useSelector } from "react-redux";

const Comment = ({ commentId }) => {
  const comments = useSelector((state) => state.comments.comments);
  const comment = comments.find((comment) => comment.id === commentId);
  return (
    <div>
      {comment.body}
    </div>
  );
};
export default Comment;
