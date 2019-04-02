import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledForm = styled.form`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  max-width: 340px;
`;

export function Form({ children, ...props }) {
  return <StyledForm {...props}>{children}</StyledForm>;
}

Form.propTypes = {
  children: PropTypes.node
};
