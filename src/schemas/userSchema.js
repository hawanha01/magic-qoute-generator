import * as Yup from "yup";

const userSchema = Yup.object({
  first_name: Yup.string()
    .min(2, "First Name must be at lease 6 charachters")
    .max(25)
    .required("Please enter your first name"),
  last_name: Yup.string()
    .min(2, "Last Name must be at lease 6 charachters")
    .max(25)
    .required("Please enter your last name"),
  user_name: Yup.string()
    .required("User Name is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "User Name must only contain letters, numbers, and be between 3 and 20 characters."
    ),
  email: Yup.string()
    .email("Invalid email adress")
    .required("Please enter your email"),
  gender: Yup.string().required("Gender is required"),
  password: Yup.string().min(6, "Password must be at lease 6 charachters"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
export default userSchema;
