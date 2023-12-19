import { useFormik } from "formik";
import React from "react";
import qouteValidation from "../../validations/qouteValidation";
import { useDispatch, useSelector } from "react-redux";
import { qouteActionAddQoute } from "../../actions/qouteActions";
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

        <button type="submit">add qoute</button>
      </form>
    </div>
  );
};

export default QouteModal;
