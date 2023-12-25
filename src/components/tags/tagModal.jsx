import { useFormik } from "formik";
import tagValidation from "../../validations/tagValication";
import { useDispatch } from "react-redux";
import { TagActionCreateTag } from "../../actions/tagActions";
import "./style.css";

const TagModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const initialValues = {
    title: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: tagValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(TagActionCreateTag(values));
      resetForm();
      closeModal();
    },
  });

  return (
    <div className="tag-modal-container">
      <form onSubmit={formik.handleSubmit} className="tag-modal-form">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Add a tag here"
            {...formik.getFieldProps("title")}
            className="tag-modal-input"
          />
          {formik.errors.title && formik.touched.title ? (
            <p className="form-error">{formik.errors.title}</p>
          ) : null}
        </div>
        <button type="submit" className="tag-modal-button">
          Add Tag
        </button>
      </form>
    </div>
  );
};

export default TagModal;
