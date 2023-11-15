import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./SignInForm.scss";

import {
  creatAuthUserWithEmailAndPAssword,
  createUserDocumentFromAuth,
  creatuserDocumentgooglepopup,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/Firebase";
import FormInput from "../form-input/Form";
import Button from "../Button/Button";

const SignInForm = () => {
  const defaultFormField = {
    email: "",
    password: "",
  };
  const resetFormField = () => {
    setFormField(defaultFormField);
  };
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;
  const handlechange = (event) => {
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
    console.log("handle");
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          toast("incorrect password for email");
          break;
        case "auth/invalid-login-credentials":
          toast("no user associated with this email");
          break;
        case "auth/too-many-requests":
          toast(
            "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later"
          );
          break;
        default:
          console.log(error);
      }
    }
  };
  const SignInwithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-up-conyainer">
      <h2>Already have an account ?</h2>
      <span>sign up with your email and paswword </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="emil"
          onChange={handlechange}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handlechange}
          name="password"
          value={password}
          required
        />
      </form>
      <div className="button-containe">
        <Button onClick={handleSubmit}>sign in </Button>
        <Button onClick={SignInwithGoogle} buttonType="google">
          google sign in
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
