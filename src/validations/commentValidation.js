import * as Yup from "yup";
const commentValidation = Yup.object({
  body: Yup.string()
    .min(1, "Minimum 1 character require for comment")
    .required("Comment body required"),
});

export default commentValidation;
