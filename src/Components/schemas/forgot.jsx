import * as Yup from "yup";

export const forgotUpSchema = Yup.object({
    email: Yup.string().email('Please enter valid email').required("Please enter your email")
});