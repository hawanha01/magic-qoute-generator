import { useDispatch, useSelector } from "react-redux";
import CommentLike from "../like/commentLike";
import CommentDislike from "../dislike/commentDislike";
import { useState } from "react";
import ReactModal from "react-modal";
import { likeActionRemoveLikesOfComment } from "../../actions/likeAction";
import { dislikeActionRemoveDislikesOfComment } from "../../actions/dislikeAction";
import { commentActionDeleteComment } from "../../actions/commentActions";
import EditCommentModal from "./editCommantModal";

const Comment = ({ commentId }) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const comments = useSelector((state) => state.comments.data);
  const currentUser = useSelector((state) => state.currentUser.data);
  const dispatch = useDispatch();
  const comment = comments.find((comment) => comment.id === commentId);
  ReactModal.setAppElement("#root");

  const openEditModal = () => {
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  const handleDelete = () => {
    dispatch(likeActionRemoveLikesOfComment(commentId));
    dispatch(dislikeActionRemoveDislikesOfComment(commentId));
    dispatch(commentActionDeleteComment(commentId));
  };
  return (
    <>
      {comment ? (
        <div>
          {comment.body}
          <span>
            {comment.userId === currentUser.id ? (
              <span>
                <button onClick={openEditModal}>edit</button>
                <button onClick={() => handleDelete()}>delete</button>
              </span>
            ) : null}
          </span>
          <ReactModal isOpen={editModalIsOpen} onRequestClose={closeEditModal}>
            <EditCommentModal
              closeModal={closeEditModal}
              commentId={commentId}
            />
          </ReactModal>
          <CommentLike commentId={comment.id} />
          <CommentDislike commentId={comment.id} />
        </div>
      ) : null}
    </>
  );
};
export default Comment;
