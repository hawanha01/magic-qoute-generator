import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  likeActionLikeQoute,
  likeActionRemoveLikeFromQoute,
} from "../../actions/likeAction";
import {
  qouteActionAddLikeToQoute,
  qouteActionRemoveLikeFromQoute,
} from "../../actions/qouteActions";

const Like = ({ qouteId }) => {
  const [isLike, setIsLike] = useState();
  const qoutes = useSelector((state) => state.qoutes.data);
  const current_user = useSelector((state) => state.current_user.data);
  const likes = useSelector((state) => state.likes.data);
  const likeId = useSelector((state) => state.likes.id);
  const dispatch = useDispatch();
  const qoute = qoutes.find((qoute) => qoute.id === qouteId);

  const like = likes.find(
    (like) => like.user_id === current_user.id && like.qoute_id === qouteId
  );

  useEffect(() => {
    like ? setIsLike(true) : setIsLike(false);
  }, [like]);

  const handleLike = async () => {
    if (like) {
      dispatch(likeActionRemoveLikeFromQoute({ qouteId, current_user }));
      dispatch(qouteActionRemoveLikeFromQoute({ qouteId, like }));
      setIsLike(!isLike);
    } else {
      dispatch(likeActionLikeQoute({ qouteId, current_user }));
      dispatch(qouteActionAddLikeToQoute({ qouteId, likeId: likeId + 1 }));
      setIsLike(!isLike);
    }
  };

  return (
    <button onClick={() => handleLike()}>
      {isLike ? <span>liked</span> : <span>likes</span>}
      {qoute.like_ids.length}
    </button>
  );
};

export default Like;
