import React from "react";

import { useContactFormState } from "../ContactFormContext";
import { Form, TextField } from "../../ui";

export function UserInfoStep() {
  const {
    state: { firstName, lastName, email },
    dispatch
  } = useContactFormState();

  return (
    <>
      <h1>Enter Your Contact Information</h1>
      <Form>
        <TextField
          label="First Name"
          name="firstName"
          onChange={e =>
            dispatch({ type: "FIRST_NAME_CHANGE", payload: e.target.value })
          }
          value={firstName}
        />

        <TextField
          label="Last Name"
          name="lastName"
          onChange={e =>
            dispatch({ type: "LAST_NAME_CHANGE", payload: e.target.value })
          }
          value={lastName}
        />

        <TextField
          label="Email Address"
          name="email"
          onChange={e =>
            dispatch({ type: "EMAIL_CHANGE", payload: e.target.value })
          }
          value={email}
        />
      </Form>
    </>
  );
}

export default UserInfoStep;
