import { useFormik } from "formik";
import React from "react";
import commentValidation from "../../validations/commentValidation";
import { useDispatch, useSelector } from "react-redux";
import { commentActionAddComment } from "../../actions/commentActions";
import { qouteActionAddCommentToQoute } from "../../actions/qouteActions";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Comment.css";

const CommentForm = ({ qoute, currentUser }) => {
  const dispatch = useDispatch();
  const commentId = useSelector((state) => state.comments.id);
  const initialValues = {
    body: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: commentValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(commentActionAddComment({ values, currentUser, qouteId: qoute.id }));
      dispatch(
        qouteActionAddCommentToQoute({
          commentId: commentId + 1,
          qouteId: qoute.id,
        })
      );
      resetForm();
    },
  });

  return (
    <div className="comment-form-container">
      <form onSubmit={formik.handleSubmit}>
        <textarea
          className="comment-input"
          type="text"
          autoComplete="off"
          placeholder="Add a comment..."
          {...formik.getFieldProps("body")}
          rows="1"
          onFocus={(e) => {
            e.target.rows = 5;
          }}
          onBlur={(e) => {
            e.target.rows = 1;
          }}
        />
        <button type="submit" className="add-comment-button">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
