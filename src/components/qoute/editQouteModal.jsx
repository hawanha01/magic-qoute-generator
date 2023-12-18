import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import qouteValidation from "../../validations/qouteValidation";
import { qouteActionUpdateQoute } from "../../actions/qouteActions";

const EditQouteModal = ({ closeModal, qouteId }) => {
  const qoutes = useSelector((state) => state.qoutes.data);
  const qoute = qoutes.find((qoute) => qoute.id === qouteId);
  const tags = useSelector((state) => state.tags.data);
  const dispatch = useDispatch();

  const initialValues = {
    body: qoute.body,
    tag_ids: qoute.tag_ids,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: qouteValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(qouteActionUpdateQoute({ values, qouteId }));
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

        <div>
          <label htmlFor="tag_ids">Tags</label>
          <select
            value={formik.tag_ids}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="tag_ids"
          >
            {tags.map((tag) => (
              <option key={tag.id} value={tag.id}>
                {tag.title}
              </option>
            ))}
          </select>
          {formik.errors.tag_ids && formik.touched.tag_ids ? (
            <p className="form-error">{formik.errors.tag_ids}</p>
          ) : null}
        </div>

        <button type="submit">update qoute</button>
      </form>
    </div>
  );
};
export default EditQouteModal;
