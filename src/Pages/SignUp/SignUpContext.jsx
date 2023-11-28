import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SignUp from "./SignUp";
import { useState } from "react";
import { fbSigup } from "../../firebase_setup/firebase";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Email format is invalid")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

function SignUpContext() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });

  //without provider
  const onSubmit = async (d) => {
    try {
      await fbSigup(d.email, d.password);

      //the user is authenticated
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  //with google

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <SignUp
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
      control={control}
      errorMessage={errorMessage}
    />
  );
}

export default SignUpContext;
