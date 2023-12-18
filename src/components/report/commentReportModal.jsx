import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { reportActionAddReport } from "../../actions/reportActions";
import { commentActionAddReport } from "../../actions/commentActions";

const CommentReportModal = ({closeModal,commentId}) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.current_user.data);
  const reportId = useSelector((state) => state.reports.id);
  const initialValues = {
    description: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      dispatch(reportActionAddReport({ values, currentUser }));
      dispatch(
        commentActionAddReport({ reportId: reportId + 1, commentId })
      );
      resetForm();
      closeModal();
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="description">Content</label>
          <textarea
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("description")}
          />
          {formik.errors.description && formik.touched.description ? (
            <p className="form-error">{formik.errors.description}</p>
          ) : null}
        </div>

        <button type="submit">add report</button>
      </form>
    </div>
  );
}

export default CommentReportModal