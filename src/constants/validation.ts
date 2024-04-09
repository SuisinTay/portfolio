import * as Yup from "yup";

export const formValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please fill in your name.")
    .min(2, "Name should start with at least 2 characters")
    .max(70, "Name should only have 70 characters."),
  email: Yup.string()
    .email("Please fill in the correct email format")
    .required("Please fill in your Email Address"),
  message: Yup.string().required("Please drop in some message."),
});
