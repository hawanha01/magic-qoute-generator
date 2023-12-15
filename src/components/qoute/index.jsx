import React, { useState } from "react";
import { useSelector } from "react-redux";
import Like from "../like";
import Dislike from "../dislike";
import Comment from "../comment";
import ReactModal from "react-modal";
import CommentModal from "../comment/commentModal";

const Qoute = ({ qoute_id }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const qoutes = useSelector((state) => state.qoutes.qoutes);
  const qoute = qoutes.find((qoute) => qoute.id === qoute_id);
  const tags = useSelector((state) => state.tags.tags);
  const associated_tags = tags.filter((tag) => qoute.tag_ids.includes(tag.id));
  const tag_names = associated_tags.map((tag) => tag.title);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <div>
        Body: {qoute.body},tags: {tag_names}
      </div>
      <div>
        <Like qouteId={qoute_id} />
        <Dislike qouteId={qoute_id} />
      </div>
      {qoute.comment_ids.map((comment_id) => (
        <Comment key={qoute.id} commentId={comment_id} />
      ))}
      <button onClick={openModal}>new comment</button>

      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <CommentModal closeModal={closeModal} qouteId={qoute_id} />
      </ReactModal>
    </div>
  );
};
export default Qoute;
