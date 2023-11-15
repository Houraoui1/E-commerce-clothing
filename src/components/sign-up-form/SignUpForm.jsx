import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./SignUpForm.scss";

import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase";
import FormInput from "../form-input/Form";
import Button from "../Button/Button";

const SignUpForm = () => {
  const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const resetFormField = () => {
    setFormField(defaultFormField);
  };
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);

    setFormField((formField) => ({
      ...formField,
      [name]: value,
    }));
  };
  //   const handleSubmit = (event) => {
  //     displayName, email, password, (confirmePassword = formField);
  //     console.log(displayName, email, password, confirmePassword, "handle");
  //     if (displayName && email && password && confirmePassword) {
  //       console.log("Successfully toasted!");
  //     }

  //   };

  const handleSubmit = async (event) => {
    console.log("Form submitted");
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("password and conferme password not equals");
    } else {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log("user ", user, displayName, password);
        console.log("creating with error");
        await createUserDocumentFromAuth(user, { displayName });
        console.log("creating with success");
        resetFormField();
      } catch (error) {
        switch (error.code) {
          case error.code === "auth/email-already-in-use":
            console.log(error, "cant handle sdfsdfsdf");
        }
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
      </form>
      <Button onClick={handleSubmit}>Sign Up</Button>
    </div>
  );
};

export default SignUpForm;
