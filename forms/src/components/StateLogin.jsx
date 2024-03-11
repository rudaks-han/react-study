import { useState } from "react";

export default function Login() {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(field, event) {
    setLoginInput((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control">
        <label>Email</label>
        <input
          type="email"
          onChange={(event) => handleInputChange("email", event)}
          value={loginInput.email}
        />
      </div>
      <div className="control">
        <label>Password</label>
        <input
          type="password"
          onChange={(event) => handleInputChange("password", event)}
          value={loginInput.password}
        />
      </div>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
