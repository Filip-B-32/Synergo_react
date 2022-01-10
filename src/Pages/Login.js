import React, { useReducer, useState } from "react";
import LoginForm from "./LoginForm";


function Login() {
  const adminUser = {
    email: "nume@yahoo.com",
    password: "parola",
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        email: details.email,
      });
    } else {
      console.log("details don't match");
      setError(<p id="error_message">Details don&#39;t match</p>);
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <div className="Login">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome!!!
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login
