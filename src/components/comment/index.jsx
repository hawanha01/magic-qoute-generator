import { useDispatch, useSelector } from "react-redux";
import CommentLike from "../like/commentLike";
import CommentDislike from "../dislike/commentDislike";
import { useState } from "react";
import ReactModal from "react-modal";
import { likeActionRemoveLikesOfComment } from "../../actions/likeAction";
import { dislikeActionRemoveDislikesOfComment } from "../../actions/dislikeAction";
import { commentActionDeleteComment } from "../../actions/commentActions";
import EditCommentModal from "./editCommantModal";
import CommentReportModal from "../report/commentReportModal";
import Report from "../report";

const Comment = ({ commentId }) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [reportModalIsOpen, setReportModalIsOpen] = useState(false);
  const comments = useSelector((state) => state.comments.data);
  const current_user = useSelector((state) => state.current_user.data);
  const dispatch = useDispatch();
  const comment = comments.find((comment) => comment.id === commentId);
  ReactModal.setAppElement("#root");

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
            {comment.user_id === current_user.id ? (
              <span>
                <button onClick={openEditModal}>edit</button>
                <button onClick={() => handleDelete()}>delete</button>
              </span>
            ) : null}
          </span>
          {current_user.id !== comment.user_id ? (
            <button onClick={openReportModal}>add report</button>
          ) : null}
          {comment.report_ids.map((reportId) => (
            <Report key={reportId} reportId={reportId} />
          ))}
          <ReactModal
            isOpen={reportModalIsOpen}
            onRequestClose={closeReportModal}
          >
            <CommentReportModal
              closeModal={closeReportModal}
              commentId={commentId}
            />
          </ReactModal>
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
