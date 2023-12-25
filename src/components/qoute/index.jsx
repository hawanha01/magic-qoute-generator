import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Like from "../like";
import Dislike from "../dislike";
import Comment from "../comment";
import ReactModal from "react-modal";
import EditQouteModal from "./editQouteModal";
import { qouteActionDeleteQoute } from "../../actions/qouteActions";
import { likeActionRemoveLikesOfQoute } from "../../actions/likeAction";
import { dislikeActionRemoveDislikesOfQoute } from "../../actions/dislikeAction";
import { commentActionDeleteCommentsOfQoute } from "../../actions/commentActions";
import { reportActionDeleteReportsOfQoute } from "../../actions/reportActions";
import Report from "../report";
import "./styles.css";
import CommentForm from "../comment/commentForm";
import ReportForm from "../report/reportForm";
import profile_picture from "../../assets/profile_picture/profile_picture.jpg";

const Qoute = ({ qouteId }) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [activeTab, setActiveTab] = useState("comments");
  const dispatch = useDispatch();
  const qoutes = useSelector((state) => state.qoutes.data);
  const qoute = qoutes.find((qoute) => qoute.id === qouteId);
  const users = useSelector((state) => state.users.data);
  const user = users.find((user) => user.id === qoute.userId);
  const tags = useSelector((state) => state.tags.data);
  const associatedTags = tags.filter((tag) => qoute.tagIds.includes(tag.id));
  const currentUser = useSelector((state) => state.currentUser.data);
  const commentRef = useRef(null);
  ReactModal.setAppElement("#root");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (commentRef.current && !commentRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [commentRef]);

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

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="qoute-container">
      <div className="qoute-header" ref={commentRef}>
        <div className="user-info-container">
          <div className="user-info">
            <div className="user-profile">
              <img src={profile_picture} alt="User Profile" />
            </div>
            <div className="user-details">
              <div className="user-name">{user.name}</div>
              <div className="qoute-datetime">
                <span className="datetime">{qoute.date}</span>-
                <span className="datetime">{qoute.time}</span>
              </div>
            </div>
          </div>
        </div>
        {currentUser.id === qoute.userId ? (
          <div>
            <button onClick={toggleOptions}>&#8230;</button>
          </div>
        ) : null}
        <span className="qoute-actions">
          {showOptions && (
            <div className="options-dropdown">
              <button onClick={openEditModal}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </span>
      </div>

      <div className="qoute-body">{qoute.body}</div>
      <div className="qoute-tag">
        {associatedTags.map((tag) => (
          <b key={tag.id}>#{tag.title} </b>
        ))}
      </div>
      <hr />
      <Like qouteId={qouteId} />
      <Dislike qouteId={qouteId} />
      <hr />
      <div className="qoute-tabs">
        <button
          className={activeTab === "comments" ? "active-tab" : ""}
          onClick={() => handleTabClick("comments")}
        >
          Comments
        </button>
        <button
          className={activeTab === "reports" ? "active-tab" : ""}
          onClick={() => handleTabClick("reports")}
        >
          Reports
        </button>
      </div>

      {activeTab === "reports" ? (
        <div className="comment-report-div">
          {qoute.reportIds.map((reportId) => (
            <Report key={reportId} reportId={reportId} />
          ))}
          {currentUser.id !== qoute.userId ? (
            <ReportForm qouteId={qoute.id} />
          ) : null}
        </div>
      ) : (
        <div className="comment-report-div">
          {qoute.commentIds.map((commentId) => (
            <Comment key={commentId} commentId={commentId} />
          ))}
          <CommentForm qouteId={qoute.id} />
        </div>
      )}

      <ReactModal isOpen={editModalIsOpen} onRequestClose={closeEditModal}>
        <EditQouteModal closeModal={closeEditModal} qouteId={qouteId} />
      </ReactModal>
    </div>
  );
};
export default Qoute;
