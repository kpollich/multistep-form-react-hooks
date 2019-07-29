import React from "react";

import { Form, FormField } from "../../ui";
import { useContactFormState } from "../ContactFormContext";

export function FrequencyStep() {
  const {
    state: { frequency },
    dispatch
  } = useContactFormState();

  return (
    <>
      <h1>How often should we contact you?</h1>
      <Form>
        <FormField label="Daily" name="daily">
          <input
            type="radio"
            id="daily"
            name="frequency"
            value="daily"
            checked={frequency === "daily"}
            onChange={e =>
              dispatch({ type: "FREQUENCY_CHANGE", payload: e.target.value })
            }
          />
        </FormField>
        <FormField label="Weekly" name="weekly">
          <input
            type="radio"
            id="weekly"
            name="frequency"
            value="weekly"
            checked={frequency === "weekly"}
            onChange={e =>
              dispatch({ type: "FREQUENCY_CHANGE", payload: e.target.value })
            }
          />
        </FormField>
        <FormField label="Daily" name="daily">
          <input
            type="radio"
            id="monthly"
            name="frequency"
            value="monthly"
            checked={frequency === "monthly"}
            onChange={e =>
              dispatch({ type: "FREQUENCY_CHANGE", payload: e.target.value })
            }
          />
        </FormField>
      </Form>
    </>
  );
}
