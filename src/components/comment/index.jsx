import React from "react";
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

const Comment = ({ commentId, currentUser }) => {
  const [editModalIsOpen, setEditModalIsOpen] = React.useState(false);
  const [showOptions, setShowOptions] = React.useState(false);

  const users = useSelector((state) => state.users.data);
  const comments = useSelector((state) => state.comments.data);
  const dispatch = useDispatch();
  const comment = comments.find((comment) => comment.id === commentId);
  ReactModal.setAppElement("#root");

  const commentRef = React.useRef(null);

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
              {comment.userId === currentUser.id || currentUser.id === 1 ? (
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
              comment={comment}
            />
          </ReactModal>
          <div className="comment-footer">
            <CommentLike comment={comment} />
            <CommentDislike comment={comment} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Comment;
