import * as Yup from "yup";

export const empUpSchema = Yup.object({
    email: Yup.string().email('Please enter valid empid').required("Please enter your empid")
});