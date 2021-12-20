import React from "react";

function SignupForm() {
  return (
    <div className="signuppage">
      <form id="form_signup">
        <div className="form-inner">
          <h2 id="Loginh2">Sign Up</h2>
          <h3>Get started with us today!</h3>
          <div class="nume">
            <label htmlFor="name">Name </label>
            <input type="text" id="name" />
          </div>
          <div class="email">
            <label htmlFor="email">Email </label>
            <input type="text" id="email" />
          </div>
          <div class="parola">
            <label htmlFor="password">Password </label>
            <input type="password" id="password" />
          </div>
          <div class="parola2">
            <label htmlFor="password2">Confirm Password </label>
            <input type="password" id="password2" />
          </div>
          
        </div>
        <button className="signup-btn" type="submit"> Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
