import * as Yup from "yup";

const userValidation = Yup.object({
  firstName: Yup.string()
    .min(2, "First Name must be at lease 2 charachters")
    .max(25)
    .required("Please enter your first name"),
  lastName: Yup.string()
    .min(2, "Last Name must be at lease 2 charachters")
    .max(25)
    .required("Please enter your last name"),
  userName: Yup.string()
    .required("User Name is required")
    .min(4, "User Name must be at lease 4 charachters")
    .max(25)
    .required("Please enter your last name"),
  email: Yup.string()
    .email("Invalid email adress")
    .required("Please enter your email"),
  gender: Yup.string().required("Gender is required"),
  password: Yup.string().min(6, "Password must be at lease 6 charachters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
export default userValidation;
