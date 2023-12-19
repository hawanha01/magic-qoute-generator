import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  qouteActionAddDislikeToQoute,
  qouteActionRemoveDislikeFromQoute,
} from "../../actions/qouteActions";
import {
  dislikeActionDislikeQoute,
  dislikeActionRemoveDislikeFromQoute,
} from "../../actions/dislikeAction";

const Dislike = ({ qouteId }) => {
  const [isDislike, setIsDislike] = useState();
  const qoutes = useSelector((state) => state.qoutes.data);
  const currentUser = useSelector((state) => state.currentUser.data);
  const dislikes = useSelector((state) => state.dislikes.data);
  const likeId = useSelector((state) => state.dislikes.id);
  const dispatch = useDispatch();
  const qoute = qoutes.find((qoute) => qoute.id === qouteId);

  const dislike = dislikes.find(
    (dislike) =>
      dislike.userId === currentUser.id && dislike.qouteId === qouteId
  );

  useEffect(() => {
    dislike ? setIsDislike(true) : setIsDislike(false);
  }, [dislike]);

  const handleDislike = () => {
    if (dislike) {
      dispatch(dislikeActionRemoveDislikeFromQoute({ qouteId, currentUser }));
      dispatch(qouteActionRemoveDislikeFromQoute({ qouteId, dislike }));
      setIsDislike(!isDislike);
    } else {
      dispatch(dislikeActionDislikeQoute({ qouteId, currentUser }));
      dispatch(
        qouteActionAddDislikeToQoute({
          qouteId,
          dislikeId: likeId + 1,
        })
      );
      setIsDislike(!isDislike);
    }
  };

  return (
    <button onClick={() => handleDislike()}>
      {isDislike ? <span>disliked</span> : <span>dislike</span>}
      {qoute.dislikeIds.length}
    </button>
  );
};

export default Dislike;
