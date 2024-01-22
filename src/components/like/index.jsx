import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import {
  likeActionLikeQoute,
  likeActionRemoveLikeFromQoute,
} from "../../actions/likeAction";
import {
  qouteActionAddLikeToQoute,
  qouteActionRemoveLikeFromQoute,
} from "../../actions/qouteActions";

const Like = ({ qoute, currentUser }) => {
  const [isLike, setIsLike] = React.useState();

  const likes = useSelector((state) => state.likes.data);
  const likeId = useSelector((state) => state.likes.id);

  const dispatch = useDispatch();

  const like = likes.find(
    (like) => like.userId === currentUser.id && like.qouteId === qoute.id
  );

  React.useEffect(() => {
    like ? setIsLike(true) : setIsLike(false);
  }, [like]);

  const handleLike = async () => {
    if (like) {
      dispatch(
        likeActionRemoveLikeFromQoute({ qouteId: qoute.id, currentUser })
      );
      dispatch(qouteActionRemoveLikeFromQoute({ qouteId: qoute.id, like }));
      setIsLike(!isLike);
    } else {
      dispatch(likeActionLikeQoute({ qouteId: qoute.id, currentUser }));
      dispatch(
        qouteActionAddLikeToQoute({ qouteId: qoute.id, likeId: likeId + 1 })
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
      {qoute.likeIds.length}
    </span>
  );
};

export default Like;
