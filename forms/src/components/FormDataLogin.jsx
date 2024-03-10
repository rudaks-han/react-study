import React, { useRef, useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  FormField,
  FormGroup,
  Radio,
  Select,
} from "semantic-ui-react";

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    // const email = formData.get("email");
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <FormField>
        <label>Email</label>
        <input type="email" name="email" />
      </FormField>
      <FormField>
        <label>Password</label>
        <input type="password" name="password" />
      </FormField>
      <FormField>
        <label>Password</label>
        <input type="password" name="password2" />
      </FormField>
      <FormField
        type="input"
        control={Select}
        label="Gender"
        name="gender"
        options={[
          { key: "m", text: "Male", value: "male" },
          { key: "f", text: "Female", value: "female" },
          { key: "o", text: "Other", value: "other" },
        ]}
        placeholder="Gender"
      />
      <FormGroup inline>
        <label>Quantity</label>
        <FormField control={Radio} name="quantity" label="One" value="1" />
        <FormField control={Radio} name="quantity" label="Two" value="2" />
        <FormField control={Radio} name="quantity" label="Three" value="3" />
      </FormGroup>
      <FormField
        control={Checkbox}
        name="terms"
        label={{ children: "I agree to the Terms and Conditions" }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
