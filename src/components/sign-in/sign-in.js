import React, { useState } from "react";

import "./sign-in.style.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userCredentials;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email, password });
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="email"
          required
          handleChange={onHandleChange}
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="password"
          required
          handleChange={onHandleChange}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
