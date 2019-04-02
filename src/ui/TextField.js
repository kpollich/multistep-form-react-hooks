import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  padding: 0.5rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  display: "block";
  margin-right: 1rem;
`;

export function TextField({ label, ...props }) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <input type="text" {...props} />
    </Container>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func
};
