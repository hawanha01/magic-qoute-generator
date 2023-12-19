import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dislikeActionDislikeComment,
  dislikeActionRemoveDislikeFromComment,
} from "../../actions/dislikeAction";
import {
  commentActionAddDislikeToComment,
  commentActionRemoveDislikeFromComment,
} from "../../actions/commentActions";

const CommentDislike = ({ commentId }) => {
  const [isDislike, setIsDislike] = useState();
  const comments = useSelector((state) => state.comments.data);
  const currentUser = useSelector((state) => state.currentUser.data);
  const dislikes = useSelector((state) => state.dislikes.data);
  const likeId = useSelector((state) => state.dislikes.id);
  const dispatch = useDispatch();
  const comment = comments.find((comment) => comment.id === commentId);

  const dislike = dislikes.find(
    (dislike) =>
      dislike.userId === currentUser.id && dislike.commentId === commentId
  );

  useEffect(() => {
    dislike ? setIsDislike(true) : setIsDislike(false);
  }, [dislike]);

  const handleDislike = () => {
    if (dislike) {
      dispatch(
        dislikeActionRemoveDislikeFromComment({ commentId, currentUser })
      );
      dispatch(commentActionRemoveDislikeFromComment({ commentId, dislike }));
      setIsDislike(!isDislike);
    } else {
      dispatch(dislikeActionDislikeComment({ commentId, currentUser }));
      dispatch(
        commentActionAddDislikeToComment({
          commentId,
          dislikeId: likeId + 1,
        })
      );
      setIsDislike(!isDislike);
    }
  };

  return (
    <button onClick={() => handleDislike()}>
      {isDislike ? <span>disliked</span> : <span>dislike</span>}
      {comment.dislikeIds.length}
    </button>
  );
};

export default CommentDislike;
