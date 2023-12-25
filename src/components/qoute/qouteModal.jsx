import { useFormik } from "formik";
import React from "react";
import qouteValidation from "../../validations/qouteValidation";
import { useDispatch, useSelector } from "react-redux";
import { qouteActionAddQoute } from "../../actions/qouteActions";
import "./styles.css";

const QouteModal = ({ closeModal }) => {
  const tags = useSelector((state) => state.tags.data);
  const currentUser = useSelector((state) => state.currentUser.data);
  const dispatch = useDispatch();

  const initialValues = {
    body: "",
    tagIds: [],
  };

  const formik = useFormik({
    initialValues,
    validationSchema: qouteValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(qouteActionAddQoute({ values, currentUser }));
      resetForm();
      closeModal();
    },
  });

  return (
    <div className="qoute-modal-container">
      <form onSubmit={formik.handleSubmit} className="qoute-form">
        <div>
          <textarea
            className="qoute-input"
            name="body"
            type="text"
            autoComplete="off"
            placeholder="Write a quote"
            {...formik.getFieldProps("body")}
            rows="1"
            onFocus={(e) => {
              e.target.rows = 5;
            }}
          />
        </div>

        {formik.errors.body && formik.touched.body ? (
          <p className="form-error">{formik.errors.body}</p>
        ) : null}
        <div>
          <label htmlFor="tagIds" className="qoute-label">
            <b>Tag list</b>
          </label>
          {tags.map((tag) => (
            <div key={tag.id} className="tag-checkbox">
              <input
                type="checkbox"
                id={`tag-${tag.id}`}
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
              <label htmlFor={`tag-${tag.id}`} className="tag-label">
                {tag.title}
              </label>
            </div>
          ))}
          {formik.errors.tagIds && formik.touched.tagIds ? (
            <p className="form-error">{formik.errors.tagIds}</p>
          ) : null}
        </div>

        <button type="submit" className="add-qoute-button">
          Add Qoute
        </button>
      </form>
    </div>
  );
};

export default QouteModal;
