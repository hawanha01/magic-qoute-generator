import { useFormik } from "formik";
import React from "react";
import qouteValidation from "../../validations/qouteValidation";
import schema from "../../schema";
import { useDispatch, useSelector } from "react-redux";
import { addQoute } from "../../actions/qouteActions";
const QouteModal = ({ closeModal }) => {
  const tags = schema.tags;
  const current_user = useSelector((state) => state.current_user.current_user);
  const dispatch = useDispatch();
  const initialValues = {
    body: "",
    tag_ids: [],
  };
  const formik = useFormik({
    initialValues,
    validationSchema: qouteValidation,
    onSubmit: (values, { resetForm }) => {
      values.user_id = current_user.id;
      dispatch(addQoute(values));
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

        <button type="submit">add qoute</button>
      </form>
    </div>
  );
};

export default QouteModal;
