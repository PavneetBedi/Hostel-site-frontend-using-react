import * as Yup from "yup";

export const signUpSchema = Yup.object({
  userName: Yup.string().min(2).max(25).required("Please enter your Username"),
  password: Yup.string().min(6).required("Please enter your password")
});