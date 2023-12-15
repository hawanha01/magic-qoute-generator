import { useFormik } from "formik";
import React from "react";
import commentValidation from "../../validations/commentValidation";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../actions/commentActions";
import { addCommentToQoute } from "../../actions/qouteActions";

const CommentModal = ({ closeModal, qouteId }) => {
  const dispatch = useDispatch();
  const current_user = useSelector((state) => state.current_user.current_user);
  const comments = useSelector((state) => state.comments.comments);
  const initialValues = {
    body: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: commentValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(addComment({ values, current_user, qouteId }));
      dispatch(addCommentToQoute({ commentId: comments.length + 1, qouteId }));
      resetForm();
      closeModal();
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="body">Content</label>
          <textarea
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("body")}
          />
          {formik.errors.body && formik.touched.body ? (
            <p className="form-error">{formik.errors.body}</p>
          ) : null}
        </div>

        <button type="submit">add comment</button>
      </form>
    </div>
  );
};

export default CommentModal;
