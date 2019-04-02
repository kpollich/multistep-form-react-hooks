import React, { useContext } from "react";

import { ContactFormContext } from "./ContactFormContext";

function FrequencyStep({ frequency }) {
  const { dispatch } = useContext(ContactFormContext);

  return (
    <>
      <h1>How often should we contact you?</h1>
      <form>
        <div>
          <label htmlFor="daily">Daily</label>
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
        </div>
        <div>
          <label htmlFor="weekly">Weekly</label>

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
        </div>
        <div>
          <label htmlFor="monthly">Monthly</label>

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
        </div>
      </form>
    </>
  );
}

export default FrequencyStep;
