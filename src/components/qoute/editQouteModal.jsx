import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import qouteValidation from "../../validations/qouteValidation";
import { qouteActionUpdateQoute } from "../../actions/qouteActions";
import "./styles.css";

const EditQouteModal = ({ closeModal, qoute, tags }) => {
  const dispatch = useDispatch();

  const initialValues = {
    body: qoute.body,
    tagIds: qoute.tagIds,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: qouteValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(qouteActionUpdateQoute({ values, qouteId: qoute.id }));
      resetForm();
      closeModal();
    },
  });

  return (
    <div className="edit-qoute-modal-container">
      <form onSubmit={formik.handleSubmit} className="edit-qoute-modal-form">
        <div>
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

        <button type="submit">Update Qoute</button>
      </form>
    </div>
  );
};

export default EditQouteModal;
