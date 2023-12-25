import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentLike from "../like/commentLike";
import CommentDislike from "../dislike/commentDislike";
import ReactModal from "react-modal";
import { commentActionDeleteComment } from "../../actions/commentActions";
import EditCommentModal from "./editCommantModal";
import { likeActionRemoveLikeFromComment } from "../../actions/likeAction";
import { dislikeActionRemoveDislikeFromComment } from "../../actions/dislikeAction";
import profile_picture from "../../assets/profile_picture/profile_picture.jpg";
import "./Comment.css";

const Comment = ({ commentId }) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const users = useSelector((state) => state.users.data);
  const comments = useSelector((state) => state.comments.data);
  const currentUser = useSelector((state) => state.currentUser.data);
  const dispatch = useDispatch();
  const comment = comments.find((comment) => comment.id === commentId);
  ReactModal.setAppElement("#root");

  const commentRef = useRef(null);

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
    dispatch(likeActionRemoveLikeFromComment(commentId));
    dispatch(dislikeActionRemoveDislikeFromComment(commentId));
    dispatch(commentActionDeleteComment(commentId));
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      {comment ? (
        <div className="comment-container" ref={commentRef}>
          <div className="comment-content">
            <div className="comment-body">
              <div className="comment-user-profile">
                <img
                  src={profile_picture}
                  alt="Profile"
                  className="profile-image"
                />
              </div>
              <div className="comment-info">
                <b>{users.find((user) => user.id === comment.userId).name}</b>
                <div className="comment-text">{comment.body}</div>
              </div>
            </div>
            <span className="comment-actions">
              {comment.userId === currentUser.id ? (
                <span className="comment-options">
                  <button onClick={toggleOptions}>&#8230;</button>
                  {showOptions && (
                    <div className="options-dropdown">
                      <button onClick={openEditModal}>Edit</button>
                      <button onClick={handleDelete}>Delete</button>
                    </div>
                  )}
                </span>
              ) : null}
            </span>
          </div>
          <ReactModal isOpen={editModalIsOpen} onRequestClose={closeEditModal}>
            <EditCommentModal
              closeModal={closeEditModal}
              commentId={commentId}
            />
          </ReactModal>
          <div className="comment-footer">
            <CommentLike commentId={comment.id} />
            <CommentDislike commentId={comment.id} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Comment;
