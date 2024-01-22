import React from "react";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  dislikeActionDislikeComment,
  dislikeActionRemoveDislikeFromComment,
} from "../../actions/dislikeAction";
import {
  commentActionAddDislikeToComment,
  commentActionRemoveDislikeFromComment,
} from "../../actions/commentActions";

const CommentDislike = ({ comment }) => {
  const [isDislike, setIsDislike] = React.useState();

  const currentUser = useSelector((state) => state.currentUser.data);
  const dislikes = useSelector((state) => state.dislikes.data);
  const likeId = useSelector((state) => state.dislikes.id);
  const dispatch = useDispatch();

  const dislike = dislikes.find(
    (dislike) =>
      dislike.userId === currentUser.id && dislike.commentId === comment.id
  );

  React.useEffect(() => {
    dislike ? setIsDislike(true) : setIsDislike(false);
  }, [dislike]);

  const handleDislike = () => {
    if (dislike) {
      dispatch(
        dislikeActionRemoveDislikeFromComment({
          commentId: comment.id,
          currentUser,
        })
      );
      dispatch(
        commentActionRemoveDislikeFromComment({
          commentId: comment.id,
          dislike,
        })
      );
      setIsDislike(!isDislike);
    } else {
      dispatch(
        dislikeActionDislikeComment({ commentId: comment.id, currentUser })
      );
      dispatch(
        commentActionAddDislikeToComment({
          commentId: comment.id,
          dislikeId: likeId + 1,
        })
      );
      setIsDislike(!isDislike);
    }
  };

  return (
    <span onClick={() => handleDislike()}>
      {isDislike ? (
        <FontAwesomeIcon icon={faThumbsDown} style={{ color: "blue" }} />
      ) : (
        <FontAwesomeIcon icon={faThumbsDown} />
      )}
      {comment.dislikeIds.length}
    </span>
  );
};

export default CommentDislike;
