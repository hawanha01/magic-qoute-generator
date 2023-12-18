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
  const qoute = qoutes.find((qoute) => qoute.id === qouteId);
  const dispatch = useDispatch();
  const current_user = useSelector((state) => state.current_user.data);
  const dislikes = useSelector((state) => state.dislikes.data);

  const dislike = dislikes.find(
    (dislike) =>
      dislike.user_id === current_user.id && dislike.qoute_id === qouteId
  );

  useEffect(() => {
    dislike ? setIsDislike(true) : setIsDislike(false);
  }, [dislike]);

  const handleDislike = () => {
    if (dislike) {
      dispatch(dislikeActionRemoveDislikeFromQoute({ qouteId, current_user }));
      dispatch(qouteActionRemoveDislikeFromQoute({ qouteId, dislike }));
      setIsDislike(!isDislike);
    } else {
      dispatch(dislikeActionDislikeQoute({ qouteId, current_user }));
      dispatch(
        qouteActionAddDislikeToQoute({
          qouteId,
          dislikeId: dislikes.length + 1,
        })
      );
      setIsDislike(!isDislike);
    }
  };

  return (
    <button onClick={() => handleDislike()}>
      {isDislike ? <span>disliked</span> : <span>dislike</span>}
      {qoute.dislike_ids.length}
    </button>
  );
};

export default Dislike;
