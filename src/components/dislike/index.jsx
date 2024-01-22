import React from "react";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  qouteActionAddDislikeToQoute,
  qouteActionRemoveDislikeFromQoute,
} from "../../actions/qouteActions";
import {
  dislikeActionDislikeQoute,
  dislikeActionRemoveDislikeFromQoute,
} from "../../actions/dislikeAction";

const Dislike = ({ qoute, currentUser }) => {
  const [isDislike, setIsDislike] = React.useState();

  const dislikes = useSelector((state) => state.dislikes.data);
  const dislikeId = useSelector((state) => state.dislikes.id);

  const dispatch = useDispatch();

  const dislike = dislikes.find(
    (dislike) =>
      dislike.userId === currentUser.id && dislike.qouteId === qoute.id
  );

  React.useEffect(() => {
    dislike ? setIsDislike(true) : setIsDislike(false);
  }, [dislike]);

  const handleDislike = () => {
    if (dislike) {
      dispatch(
        dislikeActionRemoveDislikeFromQoute({ qouteId: qoute.id, currentUser })
      );
      dispatch(
        qouteActionRemoveDislikeFromQoute({ qouteId: qoute.id, dislike })
      );
      setIsDislike(!isDislike);
    } else {
      dispatch(dislikeActionDislikeQoute({ qouteId: qoute.id, currentUser }));
      dispatch(
        qouteActionAddDislikeToQoute({
          qouteId: qoute.id,
          dislikeId: dislikeId + 1,
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
      {qoute.dislikeIds.length}
    </span>
  );
};

export default Dislike;
