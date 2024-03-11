import React, { useRef, useState } from "react";
import { Button, Form, FormField } from "semantic-ui-react";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("email: " + emailRef.current.value);
    console.log("password: " + passwordRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control">
        <label>Email</label>
        <input type="email" ref={emailRef} />
      </div>
      <div className="control">
        <label>Password</label>
        <input type="password" ref={passwordRef} />
      </div>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
