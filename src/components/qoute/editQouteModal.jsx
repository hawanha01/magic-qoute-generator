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
    tagIds: qoute.tagIds,
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
          <label htmlFor="tagIds">Tags</label>
          {tags.map((tag) => (
            <div key={tag.id}>
              <input
                type="checkbox"
                id={tag.id}
                name="tagIds"
                value={tag.id}
                checked={formik.values.tagIds.includes(tag.id)}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  formik.setFieldValue(
                    "tagIds",
                    isChecked
                      ? [...formik.values.tagIds, tag.id]
                      : formik.values.tagIds.filter((id) => id !== tag.id)
                  );
                }}
                onBlur={formik.handleBlur}
              />
              <label htmlFor={tag.id}>{tag.title}</label>
            </div>
          ))}
          {formik.errors.tagIds && formik.touched.tagIds ? (
            <p className="form-error">{formik.errors.tagIds}</p>
          ) : null}
        </div>

        <button type="submit">update qoute</button>
      </form>
    </div>
  );
};
export default EditQouteModal;
