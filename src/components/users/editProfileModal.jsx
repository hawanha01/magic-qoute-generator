import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import userValidation from "../../validations/userValidation";
import { userActionEditUser } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";

const EditProfileModal = ({ closeModal, currentUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    name: currentUser.name,
    userName: currentUser.userName,
    profilePicture: "",
    gender: currentUser.gender,
    email: currentUser.email,
    password: currentUser.password,
    confirmPassword: currentUser.password,
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
    <div style={{
      display:'flex',
      justifyContent: 'center',
      alignItems:'center',
      width: '50%'
    }}>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display:'flex',
          flexDirection:'column',
          gap: 2,
          width: '80%'
        }}
      >
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="firstName"
            {...formik.getFieldProps("firstName")}
            style={{width: '80%'}}
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
            style={{width: '80%'}}
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
            style={{width: '80%'}}
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
            style={{width: '80%'}}
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
            style={{width: '80%'}}
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
            style={{width: '80%'}}
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
            style={{width: '80%'}}
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

export default EditProfileModal;
