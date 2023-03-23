import React from "react";
import { Form, FormDropdown } from "semantic-ui-react";
import "./Login.css";
import { useLogin } from "./useLogin";

const Login = () => {
  const [values, handlers] = useLogin();
  return (
    <div className="container">
      <div className="contentContainer">
        <div className="headerContainer">
          <h2 style={{ color: "#a333c8" }}>
            Welcome to Would You Rather game!
          </h2>
          <h3 className="subHeader">Please sign in to continue</h3>
        </div>

        <h1 style={{ color: "#21ba45" }}>Login</h1>

        <div className="formContainer">
          <Form>
            <FormDropdown
              placeholder="Select User"
              selection
              scrolling
              required
              fluid
              options={handlers.renderSignInOptions()}
              value={values.userId}
              onChange={handlers.handleSelectUser}
            />
            {values.isDisabledButton ? (
              <div className="not-submmit-login-button">Login</div>
            ) : (
              <div className="login-button" onClick={handlers.handleSignInUser}>
                Login
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
