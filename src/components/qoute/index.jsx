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
import Report from "../report";
import ReportModal from "../report/reportModal";

const Qoute = ({ qouteId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [reportModalIsOpen, setReportModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const qoutes = useSelector((state) => state.qoutes.data);
  const qoute = qoutes.find((qoute) => qoute.id === qouteId);
  const users = useSelector((state) => state.users.data);
  const user = users.find((user) => user.id === qoute.userId);
  const tags = useSelector((state) => state.tags.data);
  const associatedTags = tags.filter((tag) => qoute.tagIds.includes(tag.id));
  const currentUser = useSelector((state) => state.currentUser.data);
  ReactModal.setAppElement("#root");

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

  const openReportModal = () => {
    setReportModalIsOpen(true);
  };

  const closeReportModal = () => {
    setReportModalIsOpen(false);
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
      <div>{user.name}</div>
      <div>
        Body: {qoute.body},tags:{" "}
        {associatedTags.map((tag) => `${tag.title}---`)}
        <span>
          {qoute.userId === currentUser.id ? (
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
      {currentUser.id !== qoute.userId ? (
        <button onClick={openReportModal}>report the qoute</button>
      ) : null}
      {qoute.commentIds.map((commentId) => (
        <Comment key={commentId} commentId={commentId} />
      ))}
      <button onClick={openModal}>new comment</button>
      {qoute.reportIds.map((reportId) => (
        <Report key={reportId} reportId={reportId} />
      ))}

      <ReactModal isOpen={reportModalIsOpen} onRequestClose={closeReportModal}>
        <ReportModal closeModal={closeReportModal} qouteId={qouteId} />
      </ReactModal>
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
