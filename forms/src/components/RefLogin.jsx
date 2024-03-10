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
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <FormField>
        <label>Email</label>
        <input type="email" ref={emailRef} />
      </FormField>
      <FormField>
        <label>Password</label>
        <input type="password" ref={passwordRef} />
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
