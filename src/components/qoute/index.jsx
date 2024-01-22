import React from "react";
import { useDispatch } from "react-redux";
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

const Qoute = ({ qoute, user, currentUser, tags }) => {
  const [editModalIsOpen, setEditModalIsOpen] = React.useState(false);
  const [showOptions, setShowOptions] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("comments");

  const associatedTags = tags.filter((tag) => qoute.tagIds.includes(tag.id));
  const commentRef = React.useRef(null);

  const dispatch = useDispatch();
  ReactModal.setAppElement("#root");

  React.useEffect(() => {
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
    dispatch(likeActionRemoveLikesOfQoute(qoute.id));
    dispatch(dislikeActionRemoveDislikesOfQoute(qoute.id));
    dispatch(commentActionDeleteCommentsOfQoute(qoute.id));
    dispatch(reportActionDeleteReportsOfQoute(qoute.id));
    dispatch(qouteActionDeleteQoute(qoute.id));
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
        {currentUser.id === qoute.userId || currentUser.id === 1 ? (
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
      <Like qoute={qoute} currentUser={currentUser} />
      <Dislike qoute={qoute} currentUser={currentUser} />
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
            <ReportForm qoute={qoute} />
          ) : null}
        </div>
      ) : (
        <div className="comment-report-div">
          {qoute.commentIds.map((commentId) => (
            <Comment key={commentId} commentId={commentId} currentUser={currentUser} />
          ))}
          <CommentForm qoute={qoute} currentUser={currentUser} />
        </div>
      )}

      <ReactModal isOpen={editModalIsOpen} onRequestClose={closeEditModal}>
        <EditQouteModal closeModal={closeEditModal} qoute={qoute} tags={tags} />
      </ReactModal>
    </div>
  );
};
export default Qoute;
