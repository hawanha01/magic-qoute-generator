import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeQoute, removeLike } from "../../actions/likeAction";
import { addLike, removeLikeFromQoute } from "../../actions/qouteActions";

const Like = ({ qouteId }) => {
  const qoutes = useSelector((state) => state.qoutes.qoutes);
  const qoute = qoutes.find((qoute) => qoute.id === qouteId);
  const dispatch = useDispatch();
  const current_user = useSelector((state) => state.current_user.current_user);
  const likes = useSelector((state) => state.likes.likes);
  const handleLike = () => {
    const like = likes.find(
      (like) => like.user_id === current_user.id && like.qoute_id === qouteId
    );
    if (like) {
      dispatch(removeLike({ qouteId, current_user }));
      dispatch(removeLikeFromQoute({ qouteId, like }));
    } else {
      dispatch(likeQoute({ qouteId, current_user }));
      dispatch(addLike({ qouteId, likeId: likes.length + 1 }));
    }
  };
  return (
    <button onClick={() => handleLike()}>likes{qoute.like_ids.length}</button>
  );
};

export default Like;