import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
const Login = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Header /> 
      <div className="login-container">
        <div className="container d-flex flex-column justify-content-center align-items-center login-center">
          <form className="Login col-md-8 col-lg-4 col-11">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <p> <Link to={"/"}>Forgot your password? </Link></p>
            <button type="submit">Log in</button>
            <p>
              <Link to={"/register"}>Don't have an account?   <strong>Sign up</strong> </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
