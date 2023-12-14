import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../actions/currentUserActions";

const Signin = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      try {
        const user = users.find(
          (user) =>
            user.email === values.email && user.password === values.password
        );
        if (user) {
          dispatch(setCurrentUser(user));
          navigate("/dashboard");
        }
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
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
      </form>
      <div>
        <Link to="/registration">Not have account?</Link>
      </div>
    </div>
  );
};

export default Signin;
