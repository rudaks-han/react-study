import React, { useState } from "react";
import { Button, Form, FormField } from "semantic-ui-react";

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
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <FormField>
        <label>Email</label>
        <input
          type="email"
          onChange={(event) => handleInputChange("email", event)}
          value={loginInput.email}
        />
      </FormField>
      <FormField>
        <label>Password</label>
        <input
          type="password"
          onChange={(event) => handleInputChange("password", event)}
          value={loginInput.password}
        />
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
