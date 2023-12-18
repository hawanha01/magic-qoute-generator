import { useFormik } from "formik";
import tagValidation from "../../validations/tagValication";
import { useDispatch } from "react-redux";
import { TagActionCreateTag } from "../../actions/tagActions";

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
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <textarea
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("title")}
        />
        {formik.errors.title && formik.touched.title ? (
          <p className="form-error">{formik.errors.title}</p>
        ) : null}
      </div>
      <button type="submit">Add Tag</button>
    </form>
  );
};
export default TagModal;
