import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { platinum, raven } from "../colors";

const StyledInput = styled.input`
  border: 1px solid ${platinum};
  display: inline-block;
  padding: 0.5em;
  width: 250px;
  font-size: 0.9em;

  &:focus {
    outline: none;
    border: 1px solid ${raven};
  }
`;

const StyledLabel = styled.div`
  margin-bottom: 0.3em;
`;

type InputProps = {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <React.Fragment>
      <label>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput type="text" value={value} onChange={onChange} />
      </label>
    </React.Fragment>
  );
};

export default Input;
