import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  function handleEmailChange(event) {
    console.log("email change");
    setEmail(event.target.value);
  }

  return (
    <form>
      <div className="control">
        <label>Email</label>
        <input type="email" onChange={handleEmailChange} value={email} />
      </div>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
