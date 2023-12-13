import { useFormik } from "formik";
import React from "react";
import userSchema from "../../schemas/userSchema";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      name: "",
      user_name: "",
      profile_picture: "",
      gender: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("values on submit:", values);
      resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="first_name"
            {...formik.getFieldProps("first_name")}
          />
          {formik.errors.first_name && formik.touched.first_name ? (
            <p className="form-error">{formik.errors.first_name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="last_name"
            {...formik.getFieldProps("last_name")}
          />
          {formik.errors.last_name && formik.touched.last_name ? (
            <p className="form-error">{formik.errors.last_name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="profile_picture">Profile Picture</label>
          <input
            type="file"
            {...formik.getFieldProps("profile_picture")}
          />
          {formik.errors.profile_picture && formik.touched.profile_picture ? (
            <p className="form-error">{formik.errors.profile_picture}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="name"
            {...formik.getFieldProps("name")}
          />
          {formik.errors.name && formik.touched.name ? (
            <p className="form-error">{formik.errors.name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="user_name">User Name</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="username"
            {...formik.getFieldProps("user_name")}
          />
          {formik.errors.user_name && formik.touched.user_name ? (
            <p className="form-error">{formik.errors.user_name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            autoComplete="off"
            placeholder="example@gmail.com"
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="form-error">{formik.errors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select value={formik.gender} {...formik.getFieldProps("gender")}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {formik.errors.gender && formik.touched.gender ? (
            <p className="form-error">{formik.errors.gender}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            placeholder="password"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="form-error">{formik.errors.password}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            autoComplete="off"
            placeholder="confirm password"
            {...formik.getFieldProps("confirm_password")}
          />
          {formik.errors.confirm_password && formik.touched.confirm_password ? (
            <p className="form-error">{formik.errors.confirm_password}</p>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
