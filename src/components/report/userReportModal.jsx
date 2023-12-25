import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userActionAddReport } from "../../actions/userActions";
import { reportActionAddReportToUser } from "../../actions/reportActions";
import "./Report.css";

const UserReportModal = ({ closeModal, userId }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.data);
  const reportId = useSelector((state) => state.reports.id);
  const initialValues = {
    description: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      dispatch(reportActionAddReportToUser({ values, currentUser, userId }));
      dispatch(userActionAddReport({ reportId: reportId + 1, userId }));
      resetForm();
      closeModal();
    },
  });

  return (
    <div className="user-report-modal-container">
      <form onSubmit={formik.handleSubmit} className="user-report-modal-form">
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

        <button type="submit">Add Report</button>
      </form>
    </div>
  );
};

export default UserReportModal;
