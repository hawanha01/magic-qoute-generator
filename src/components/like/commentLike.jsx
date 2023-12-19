import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  likeActionLikeComment,
  likeActionRemoveLikeFromComment,
} from "../../actions/likeAction";
import {
  commentActionAddLikeToComment,
  commentActionRemoveLikeFromComment,
} from "../../actions/commentActions";

const CommentLike = ({ commentId }) => {
  const [isLike, setIsLike] = useState();
  const comments = useSelector((state) => state.comments.data);
  const currentUser = useSelector((state) => state.currentUser.data);
  const likes = useSelector((state) => state.likes.data);
  const likeId = useSelector((state) => state.likes.id);
  const dispatch = useDispatch();
  const comment = comments.find((comment) => comment.id === commentId);

  const like = likes.find(
    (like) => like.userId === currentUser.id && like.commentId === commentId
  );

  useEffect(() => {
    like ? setIsLike(true) : setIsLike(false);
  }, [like]);

  const handleLike = async () => {
    if (like) {
      dispatch(likeActionRemoveLikeFromComment({ commentId, currentUser }));
      dispatch(commentActionRemoveLikeFromComment({ commentId, like }));
      setIsLike(!isLike);
    } else {
      dispatch(likeActionLikeComment({ commentId, currentUser }));
      dispatch(
        commentActionAddLikeToComment({ commentId, likeId: likeId + 1 })
      );
      setIsLike(!isLike);
    }
  };

  return (
    <button onClick={() => handleLike()}>
      {isLike ? <span>liked</span> : <span>likes</span>}
      {comment.likeIds.length}
    </button>
  );
};

export default CommentLike;
