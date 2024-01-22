import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import commentValidation from "../../validations/commentValidation";
import { commentActionEditComment } from "../../actions/commentActions";
import "./Comment.css";
const EditCommentModal = ({ closeModal, comment }) => {
  const dispatch = useDispatch();

  const initialValues = {
    body: comment.body,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: commentValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(commentActionEditComment({ values, commentId: comment.id }));
      resetForm();
      closeModal();
    },
  });

  return (
    <div className="edit-comment-form-container">
      <form onSubmit={formik.handleSubmit}>
        <textarea
          className="edit-comment-input"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("body")}
          rows="1"
          onFocus={(e) => {
            e.target.rows = 5;
          }}
          onBlur={(e) => {
            e.target.rows = 1;
          }}
        />
        {formik.errors.body && formik.touched.body ? (
          <p className="form-error">{formik.errors.body}</p>
        ) : null}
        <button type="submit">update comment</button>
      </form>
    </div>
  );
};
export default EditCommentModal;
