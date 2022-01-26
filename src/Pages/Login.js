import React, { useReducer, useState } from "react";
import LoginForm from "./LoginForm";
import { useEffect } from "react";
import { Table } from "react-bootstrap";

function Login() {

  const [accounts, setAccounts] = useState(null); //fluent api
  useEffect(() => {
    fetch("/api/accounts")
      .then((res) => res.json())
      .then((json) => setAccounts(json.accounts))
      .catch((err) => console.log(err));
  }, []);

/*
  const adminUser = {
    email: "nume@yahoo.com",
    password: "parola",
  };*/

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    let verify = 0;
    for(let i=0;i<accounts?.length;i++){
      if(details.email ==  accounts[i].email &&
        details.password == accounts[i].password){
          verify = 1;
        }
    }
    if (
      verify == 1
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
    setUser({ email: "" });
  };


  return (
    <div className="Login">
      {user.email != "" ? (
        <div className="welcome">
          <h2>Welcome!!!</h2>   
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login;
