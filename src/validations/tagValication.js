import * as Yup from "yup";

const tagValidation = Yup.object({
  title: Yup.string()
    .min(1, "Minimum 1 charachter require for tag")
    .required("title is required"),
});

export default tagValidation;
