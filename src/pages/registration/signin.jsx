import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUserSetCurrentUser } from "../../actions/currentUserActions";
import "./registration.css";
const Signin = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      try {
        const user = users.find(
          (user) =>
            user.email === values.email && user.password === values.password
        );
        if (user) {
          dispatch(CurrentUserSetCurrentUser(user));
          navigate("/dashboard");
        }
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="form-wrapper" id="signin-wrapper">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            autoComplete="off"
            placeholder="example@gmail.com"
            {...formik.getFieldProps("email")}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            placeholder="password"
            {...formik.getFieldProps("password")}
          />
        </div>
        <button type="submit">Submit</button>
        <Link to="/registration">Not have account?</Link>
      </form>
    </div>
  );
};

export default Signin;
