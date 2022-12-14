import React, { useState, useEffect } from "react";

import { LoginStyled } from "./shared";

function Login({ onSignIn }) {
  const [sampleUser, setSampleUser] = useState({});
  const [sampleUser2, setSampleUser2] = useState({});
  const [sampleUser3, setSampleUser3] = useState({});
  const [hasAccount, setHasAccount] = useState(true);
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
  });
  const [createAccount, setCreateAccount] = useState({
    user_name: "",
    city: "",
    state_code: "",
    zip: "",
    password: "",
    password_confirmation: "",
  });
  // repeatPassword separate from createAccount for easy user creation with createAccount data
  const [repeatPassword, setRepeatPassword] = useState("");
  // set errors and display on screen
  const [errors, setErrors] = useState([]);

  // ==========================================================
  // ==========================================================
  // set sampleUser for easy login in development mode
  useEffect(() => {
    fetch("users/first_user/first")
      .then((r) => r.json())
      .then((data) => setSampleUser(data));
  }, []);
  useEffect(() => {
    fetch("users/second_user/second")
      .then((r) => r.json())
      .then((data) => setSampleUser2(data));
  }, []);
  useEffect(() => {
    fetch("users/third_user/third")
      .then((r) => r.json())
      .then((data) => setSampleUser3(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "repeatPassword") setRepeatPassword(value);
    hasAccount
      ? setFormData({ ...formData, [name]: value })
      : setCreateAccount({ ...createAccount, [name]: value });
  };

  console.log("errors: ", errors);

  const handleSignIn = (e) => {
    e.preventDefault();

    // Creates a new session instance and sets session[:user_id] to user.id
    fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
      // body: JSON.stringify({ user_name: formData.userName }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((userData) => onSignIn(userData));
      }
    });

    // calls users#show_by_name
    //   fetch(`/users/by_name/${formData.userName}`).then((r) => {
    //     console.log(r);
    //     if (r.ok) {
    //       r.json().then((data) => {
    //         console.log("ok: ", data);
    //         // validate password on frontend
    //         if (formData.password === data.user.password) onSignIn(data);
    //         else setErrors([...errors, "User Name and Password do not match"]);
    //       });
    //     } else {
    //       // errors come from invalid userName errors on backend
    //       r.json().then((data) => {
    //         console.log("not ok: ", data);
    //         setErrors((errors) => errors.push(data.error));
    //         // setErrors(Object.entries(data.error).map((e) => `${e[0]} ${e[1]}`));
    //       });
    //     }
    //   });
    //   // onSignIn(user)
  };

  const handleCreateUser = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createAccount),
    };
    fetch(`/users`, configObj).then((r) => {
      if (r.ok) {
        r.json().then((data) => onSignIn(data));
      } else {
        r.json().then((data) => {
          console.log("create failed: ", data);
          setErrors(data.error);
        });
      }
    });
  };

  const handleDontHaveAccount = () => {
    setHasAccount((status) => !status);
  };

  return (
    <LoginStyled>
      {hasAccount ? (
        <div>
          {sampleUser ? (
            <div>
              {/* <h1>SubSonic: the voices behind the sound</h1> */}
              {/* <h1>{`User Name: ${sampleUser.user_name} Password: ${sampleUser.password}`}</h1> */}
              {/* <h1>{`User Name: ${sampleUser2.user_name} Password: ${sampleUser2.password}`}</h1> */}
              {/* <h1>{`User Name: ${sampleUser3.user_name} Password: ${sampleUser3.password}`}</h1> */}
            </div>
          ) : null}
          <form onSubmit={handleSignIn}>
            <label htmlFor="user_name">User Name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              value={formData.user_name}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit" className="signInButton">
              Sign In
            </button>
            <button
              onClick={handleDontHaveAccount}
              className="createAcctButton"
            >
              Don't have an account?
            </button>
          </form>
        </div>
      ) : (
        <div>
          <form onSubmit={handleCreateUser}>
            {/* insert validations for uniqueness */}
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              value={createAccount.user_name}
              onChange={handleChange}
            />
            <label htmlFor="city">City (full name)</label>
            <input
              type="text"
              name="city"
              id="city"
              value={createAccount.city}
              onChange={handleChange}
            />
            {/* Validate: 2 characters */}
            <label htmlFor="state_code">State (2 chars)</label>
            <input
              type="text"
              name="state_code"
              id="state_code"
              value={createAccount.state_code}
              onChange={handleChange}
            />
            {/* Validate: 5 digits */}
            {/* <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              name="zip"
              id="zip"
              value={createAccount.zip}
              onChange={handleChange}
            /> */}
            {/* insert validations for password length, must contain a number */}
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              value={createAccount.password}
              onChange={handleChange}
            />
            <label htmlFor="password_confirmation">Repeat Password</label>
            <input
              type="text"
              name="password_confirmation"
              id="password_confirmation"
              value={createAccount.password_confirmation}
              onChange={handleChange}
            />
            <button type="submit" className="signInButton">
              Create
            </button>
            <button
              onClick={handleDontHaveAccount}
              className="createAcctButton"
            >
              Back to Sign in
            </button>
          </form>
        </div>
      )}
    </LoginStyled>
  );
}

export default Login;
