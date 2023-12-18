import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Like from "../like";
import Dislike from "../dislike";
import Comment from "../comment";
import ReactModal from "react-modal";
import CommentModal from "../comment/commentModal";
import EditQouteModal from "./editQouteModal";
import { qouteActionDeleteQoute } from "../../actions/qouteActions";
import { likeActionRemoveLikesOfQoute } from "../../actions/likeAction";
import { dislikeActionRemoveDislikesOfQoute } from "../../actions/dislikeAction";
import { commentActionDeleteCommentsOfQoute } from "../../actions/commentActions";
import { reportActionDeleteReportsOfQoute } from "../../actions/reportActions";

const Qoute = ({ qouteId }) => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const qoutes = useSelector((state) => state.qoutes.data);
  const qoute = qoutes.find((qoute) => qoute.id === qouteId);
  const tags = useSelector((state) => state.tags.data);
  const associated_tags = tags.filter((tag) => qoute.tag_ids.includes(tag.id));
  const current_user = useSelector((state) => state.current_user.data);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openEditModal = () => {
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  const handleDelete = () => {
    dispatch(likeActionRemoveLikesOfQoute(qouteId));
    dispatch(dislikeActionRemoveDislikesOfQoute(qouteId));
    dispatch(commentActionDeleteCommentsOfQoute(qouteId));
    dispatch(reportActionDeleteReportsOfQoute(qouteId));
    dispatch(qouteActionDeleteQoute(qouteId));
  };

  return (
    <div>
      <div>
        Body: {qoute.body},tags: {associated_tags.map((tag) => tag.title)}
        <span>
          {qoute.user_id === current_user.id ? (
            <span>
              <button onClick={openEditModal}>edit</button>
              <button onClick={() => handleDelete()}>delete</button>
            </span>
          ) : null}
        </span>
      </div>
      <div>
        <Like qouteId={qouteId} />
        <Dislike qouteId={qouteId} />
      </div>
      {qoute.comment_ids.map((comment_id) => (
        <Comment key={comment_id} commentId={comment_id} />
      ))}
      <button onClick={openModal}>new comment</button>

      <ReactModal isOpen={editModalIsOpen} onRequestClose={closeEditModal}>
        <EditQouteModal closeModal={closeEditModal} qouteId={qouteId} />
      </ReactModal>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <CommentModal closeModal={closeModal} qouteId={qouteId} />
      </ReactModal>
    </div>
  );
};
export default Qoute;
