import { useFormik } from "formik";
import React from "react";
import userValidation from "../../validations/userValidation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActionAddUser } from "../../actions/userActions";
import "./style.css";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    name: "",
    userName: "",
    profilePicture: "",
    gender: "male",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: userValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(userActionAddUser(values));
      navigate("/");
      resetForm();
    },
  });

  return (
    <div className="form-wrapper">
      <form onSubmit={formik.handleSubmit} className="signup-form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="firstName"
            {...formik.getFieldProps("firstName")}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <p className="form-error">{formik.errors.firstName}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="lastName"
            {...formik.getFieldProps("lastName")}
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <p className="form-error">{formik.errors.lastName}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="profilePicture">Profile Picture</label>
          <input type="file" {...formik.getFieldProps("profilePicture")} />
          {formik.errors.profilePicture && formik.touched.profilePicture ? (
            <p className="form-error">{formik.errors.profilePicture}</p>
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
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="username"
            {...formik.getFieldProps("userName")}
          />
          {formik.errors.userName && formik.touched.userName ? (
            <p className="form-error">{formik.errors.userName}</p>
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
          <select
            value={formik.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="gender"
          >
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            autoComplete="off"
            placeholder="confirm password"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <p className="form-error">{formik.errors.confirmPassword}</p>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
