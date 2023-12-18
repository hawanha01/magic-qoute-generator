import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import commentValidation from "../../validations/commentValidation";
import { commentActionEditComment } from "../../actions/commentActions";

const EditCommentModal = ({ closeModal, commentId }) => {
  const comments = useSelector((state) => state.comments.data);
  const comment = comments.find((comment) => comment.id === commentId);
  const dispatch = useDispatch();

  const initialValues = {
    body: comment.body,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: commentValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(commentActionEditComment({ values, commentId }));
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
        <button type="submit">update comment</button>
      </form>
    </div>
  );
};
export default EditCommentModal;
