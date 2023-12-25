import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { qouteActionAddReportToQoute } from "../../actions/qouteActions";
import { reportActionAddReportToQoute } from "../../actions/reportActions";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Report.css";

const ReportForm = ({ qouteId }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.data);
  const reportId = useSelector((state) => state.reports.id);
  const initialValues = {
    description: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      dispatch(reportActionAddReportToQoute({ values, currentUser, qouteId }));
      dispatch(
        qouteActionAddReportToQoute({ reportId: reportId + 1, qouteId })
      );
      resetForm();
    },
  });
  return (
    <div className="report-form-container">
      <form onSubmit={formik.handleSubmit}>
        <textarea
          className="report-input"
          type="text"
          autoComplete="off"
          placeholder="Add a report..."
          {...formik.getFieldProps("description")}
          rows="1"
          onFocus={(e) => {
            e.target.rows = 5;
          }}
          onBlur={(e) => {
            e.target.rows = 1;
          }}
        />
        {formik.errors.description && formik.touched.description ? (
          <p className="form-error">{formik.errors.description}</p>
        ) : null}
        <button type="submit" className="add-report-button">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
