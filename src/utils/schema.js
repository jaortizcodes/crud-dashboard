import * as yup from "yup";
import { phoneRegex } from "./regex";

export const distributorSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  phoneNo: yup
    .string()
    .matches(phoneRegex, "Phone number is not valid")
    .required("Required"),
  address1: yup.string().required("Required"),
  address2: yup.string().required("Required"),
});

export const userSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  phoneNo: yup
    .string()
    .matches(phoneRegex, "Phone number is not valid")
    .required("Required"),
  username: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  address1: yup.string().required("Required"),
  address2: yup.string().required("Required"),
});
