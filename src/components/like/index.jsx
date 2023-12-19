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
  const currentUser = useSelector((state) => state.currentUser.data);
  const likes = useSelector((state) => state.likes.data);
  const likeId = useSelector((state) => state.likes.id);
  const dispatch = useDispatch();
  const qoute = qoutes.find((qoute) => qoute.id === qouteId);

  const like = likes.find(
    (like) => like.userId === currentUser.id && like.qouteId === qouteId
  );

  useEffect(() => {
    like ? setIsLike(true) : setIsLike(false);
  }, [like]);

  const handleLike = async () => {
    if (like) {
      dispatch(likeActionRemoveLikeFromQoute({ qouteId, currentUser }));
      dispatch(qouteActionRemoveLikeFromQoute({ qouteId, like }));
      setIsLike(!isLike);
    } else {
      dispatch(likeActionLikeQoute({ qouteId, currentUser }));
      dispatch(qouteActionAddLikeToQoute({ qouteId, likeId: likeId + 1 }));
      setIsLike(!isLike);
    }
  };

  return (
    <button onClick={() => handleLike()}>
      {isLike ? <span>liked</span> : <span>likes</span>}
      {qoute.likeIds.length}
    </button>
  );
};

export default Like;
