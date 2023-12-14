import * as Yup from "yup";

const qouteValidation = Yup.object({
  body: Yup.string()
    .min(1, "Minimum 1 characters required for qoute")
    .required("Qoute body required"),
});
export default qouteValidation;
