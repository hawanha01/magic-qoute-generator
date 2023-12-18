import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import userValidation from "../../validations/userValidation";
import { userActionEditUser } from "../../actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const EditProfileModal = ({ closeModal, currentUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const initialValues = {
    first_name: currentUser.first_name,
    last_name: currentUser.last_name,
    name: currentUser.name,
    user_name: currentUser.user_name,
    profile_picture: "",
    gender: currentUser.gender,
    email: currentUser.email,
    password: currentUser.password,
    confirm_password: currentUser.password,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: userValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(userActionEditUser({ values, currentUser }));
      resetForm();
      navigate(`/users/${currentUser.id}`);
      closeModal();
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
          <input type="file" {...formik.getFieldProps("profile_picture")} />
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
      <Link to="/">Back to login</Link>
    </div>
  );
};

export default EditProfileModal;
