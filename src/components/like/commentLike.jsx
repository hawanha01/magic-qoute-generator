import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  likeActionLikeComment,
  likeActionRemoveLikeFromComment,
} from "../../actions/likeAction";
import {
  commentActionAddLikeToComment,
  commentActionRemoveLikeFromComment,
} from "../../actions/commentActions";

const CommentLike = ({ comment }) => {
  const [isLike, setIsLike] = React.useState();

  const currentUser = useSelector((state) => state.currentUser.data);
  const likes = useSelector((state) => state.likes.data);
  const likeId = useSelector((state) => state.likes.id);
  const dispatch = useDispatch();

  const like = likes.find(
    (like) => like.userId === currentUser.id && like.commentId === comment.id
  );

  React.useEffect(() => {
    like ? setIsLike(true) : setIsLike(false);
  }, [like]);

  const handleLike = async () => {
    if (like) {
      dispatch(
        likeActionRemoveLikeFromComment({ commentId: comment.id, currentUser })
      );
      dispatch(
        commentActionRemoveLikeFromComment({ commentId: comment.id, like })
      );
      setIsLike(!isLike);
    } else {
      dispatch(likeActionLikeComment({ commentId: comment.id, currentUser }));
      dispatch(
        commentActionAddLikeToComment({
          commentId: comment.id,
          likeId: likeId + 1,
        })
      );
      setIsLike(!isLike);
    }
  };

  return (
    <span onClick={() => handleLike()}>
      <span className="icon">
        {isLike ? (
          <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
        ) : (
          <FontAwesomeIcon icon={faHeart} />
        )}
      </span>
      {comment.likeIds.length}
    </span>
  );
};

export default CommentLike;
