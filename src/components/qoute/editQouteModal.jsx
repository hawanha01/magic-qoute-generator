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
          {tags.map((tag) => (
            <div key={tag.id}>
              <input
                type="checkbox"
                id={tag.id}
                name="tag_ids"
                value={tag.id}
                checked={formik.values.tag_ids.includes(tag.id)}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  formik.setFieldValue(
                    "tag_ids",
                    isChecked
                      ? [...formik.values.tag_ids, tag.id]
                      : formik.values.tag_ids.filter((id) => id !== tag.id)
                  );
                }}
                onBlur={formik.handleBlur}
              />
              <label htmlFor={tag.id}>{tag.title}</label>
            </div>
          ))}
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
