import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput("", (value) => value.includes("@"));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput("", (value) => value.length >= 4);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control">
        <label>Email</label>
        <input onChange={handleEmailChange} value={emailValue} />
        {emailHasError && <p>Please enter a valid email</p>}
      </div>
      <div className="control">
        <label>Password</label>
        <input
          type="password"
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password"}
        />
      </div>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
