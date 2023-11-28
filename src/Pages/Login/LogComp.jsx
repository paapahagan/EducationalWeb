import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fblogin } from "../../firebase_setup/firebase";
import { useState } from "react";
import Login from "./Login";

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
});

function LogComp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });

  const onSubmit = async (d) => {
    try {
      await fblogin(d.email, d.password);

      //the user is authenticated
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Login
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
      control={control}
      errorMessage={errorMessage}
    />
  );
}

export default LogComp;
