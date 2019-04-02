import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import ContactForm from "./ContactForm/ContactForm";

function App() {
  const GlobalStyles = createGlobalStyle`
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
    }
  `;

  return (
    <div className="App">
      <GlobalStyles />
      <ContactForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
