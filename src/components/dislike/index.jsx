import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDislike, removeDislikeFromQoute } from "../../actions/qouteActions";
import { dislikeQoute, removeDislike } from "../../actions/dislikeAction";

const Dislike = ({ qouteId }) => {
  const [isDislike, setIsDislike] = useState();
  const qoutes = useSelector((state) => state.qoutes.qoutes);
  const qoute = qoutes.find((qoute) => qoute.id === qouteId);
  const dispatch = useDispatch();
  const current_user = useSelector((state) => state.current_user.current_user);
  const dislikes = useSelector((state) => state.dislikes.dislikes);
  const dislike = dislikes.find(
    (dislike) =>
      dislike.user_id === current_user.id && dislike.qoute_id === qouteId
  );
  useEffect(() => {
    dislike ? setIsDislike(true) : setIsDislike(false);
  }, [dislike]);
  const handleDislike = () => {
    if (dislike) {
      dispatch(removeDislike({ qouteId, current_user }));
      dispatch(removeDislikeFromQoute({ qouteId, dislike }));
      setIsDislike(!isDislike);
    } else {
      dispatch(dislikeQoute({ qouteId, current_user }));
      dispatch(addDislike({ qouteId, dislikeId: dislikes.length + 1 }));
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
