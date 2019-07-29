import React, { useState } from "react";
import styled from "styled-components";

import { UserInfoStep, FrequencyStep, CategoriesStep } from "./steps";
import { useContactFormState } from "./ContactFormContext";
import { Container } from "../ui";

function useFormProgress() {
  const [currentStep, setCurrentStep] = useState(0);

  function goForward() {
    setCurrentStep(currentStep + 1);
  }

  function goBack() {
    setCurrentStep(currentStep - 1);
  }

  return [currentStep, goForward, goBack];
}

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function ContactForm() {
  const { dispatch, state } = useContactFormState();
  const steps = [<UserInfoStep />, <FrequencyStep />, <CategoriesStep />];

  const [currentStep, goForward, goBack] = useFormProgress();
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  function handleSubmit() {
    dispatch({ type: "SUBMIT" });

    // Simulated network request :)
    setTimeout(() => {
      dispatch({ type: "SUBMISSION_RECEIVED" });
    }, 1500);
  }

  if (state.isSubmitLoading) {
    return (
      <div className="App">
        <p>Loading...</p>
      </div>
    );
  }

  if (state.isSubmissionReceived) {
    return (
      <div className="App">
        <h1>Thanks for your submission!</h1>
        <pre style={{ textAlign: "left" }}>
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <Container>
      {steps[currentStep]}

      <NavButtonContainer>
        {!isFirst && <button onClick={() => goBack()}>Go Back</button>}

        <button
          type="submit"
          onClick={e => {
            e.preventDefault();

            if (isLast) {
              handleSubmit();
            } else {
              goForward();
            }
          }}
        >
          {isLast ? "Submit" : "Next"}
        </button>
      </NavButtonContainer>
      <div>
        Step {currentStep + 1} of {steps.length}
      </div>
    </Container>
  );
}

export default ContactForm;
