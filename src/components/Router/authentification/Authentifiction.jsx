import SignUpForm from "../../sign-up-form/SignUpForm";
import SignInForm from "../../sign-in-form/SignInForm";

import "./Authentification.scss";
const authentifiction = () => {
  return (
    <div className="authentification-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default authentifiction;
