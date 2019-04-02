import React, { useState, useReducer } from "react";
import styled from "styled-components";

import { UserInfoStep, FrequencyStep, CategoriesStep } from "./steps";
import { ContactFormContext } from "./ContactFormContext";
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

const initialState = {
  firstName: "",
  lastName: "",
  email: "",

  frequency: "",
  categories: [],

  isSubmitLoading: false,
  isSubmissionReceived: false
};

function formReducer(state, action) {
  switch (action.type) {
    case "FIRST_NAME_CHANGE":
      return { ...state, firstName: action.payload };
    case "LAST_NAME_CHANGE":
      return { ...state, lastName: action.payload };
    case "EMAIL_CHANGE":
      return { ...state, email: action.payload };
    case "FREQUENCY_CHANGE":
      return { ...state, frequency: action.payload };
    case "CATEGORIES_CHANGE":
      return { ...state, categories: action.payload };
    case "SUBMIT":
      return { ...state, isSubmitLoading: true };
    case "SUBMISSION_RECEIVED":
      return { ...state, isSubmitLoading: false, isSubmissionReceived: true };
    default:
      throw new Error();
  }
}

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function ContactForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { firstName, lastName, email, frequency, categories } = state;

  const steps = [
    <UserInfoStep {...{ firstName, lastName, email }} />,
    <FrequencyStep {...{ frequency }} />,
    <CategoriesStep {...{ categories }} />
  ];

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
          {JSON.stringify(
            { firstName, lastName, email, frequency, categories },
            null,
            2
          )}
        </pre>
      </div>
    );
  }

  return (
    <ContactFormContext.Provider value={{ dispatch }}>
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
    </ContactFormContext.Provider>
  );
}

export default ContactForm;
