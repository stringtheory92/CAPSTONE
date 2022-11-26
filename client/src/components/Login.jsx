import React, { useState, useEffect } from "react";

function Login({ onSignIn }) {
  const [sampleUser, setSampleUser] = useState({});
  const [sampleUser2, setSampleUser2] = useState({});
  const [sampleUser3, setSampleUser3] = useState({});
  const [hasAccount, setHasAccount] = useState(true);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [createAccount, setCreateAccount] = useState({
    user_name: "",
    password: "",
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

    // calls users#show_by_name
    fetch(`/users/by_name/${formData.userName}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("ok: ", data);
          // validate password on frontend
          if (formData.password === data.password) onSignIn(data);
          else setErrors([...errors, "User Name and Password do not match"]);
        });
      } else {
        // errors come from invalid userName errors on backend
        r.json().then((data) => {
          console.log("not ok: ", data);
          setErrors(data.error);
          // setErrors(Object.entries(data.error).map((e) => `${e[0]} ${e[1]}`));
        });
      }
    });
    // onSignIn(user)
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
        r.json().then((data) => console.log("create ok: ", data));
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
    <div>
      {hasAccount ? (
        <div>
          {sampleUser ? (
            <div>
              <h1>{`User Name: ${sampleUser.user_name} Password: ${sampleUser.password}`}</h1>
              <h1>{`User Name: ${sampleUser2.user_name} Password: ${sampleUser2.password}`}</h1>
              <h1>{`User Name: ${sampleUser3.user_name} Password: ${sampleUser3.password}`}</h1>
            </div>
          ) : null}
          <form onSubmit={handleSignIn}>
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={formData.userName}
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
            <button type="submit">Sign In</button>
            <button onClick={handleDontHaveAccount}>
              Don't have an account?
            </button>
          </form>
        </div>
      ) : (
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
          {/* insert validations for password length, must contain a number */}
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={createAccount.password}
            onChange={handleChange}
          />
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            type="text"
            name="repeatPassword"
            id="repeatPassword"
            value={repeatPassword}
            onChange={handleChange}
          />
          <button type="submit">Create Profile</button>
        </form>
      )}
    </div>
  );
}

export default Login;
