import React, { useState } from 'react';
import styled from 'styled-components';
import { platinum, umber } from '../colors';

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledField = styled.input`
  position: relative;
  border: 1px solid ${platinum};
  display: inline-block;
  padding: 0.5em;
  width: 150px;
  font-size: 0.9em;
  background: #e6e6e6;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: text;
  }

  &:after {
    content: '';
    background: black;
    width: 30px;
    height: 100%;
    right: 0;
    position: absolute;
  }
`;

const StyledCopy = styled.span`
  background: rgba(255, 255, 255, 0.5);
  height: 100%;
  padding: 0 1em 0 0.5em;

  &:hover {
    cursor: pointer;
    color: ${umber};
  }
`;

type FieldProps = {
  value: string;
};

const Field: React.FC<FieldProps> = ({ value }) => {
  const [copyMessage, setCopyMessage] = useState('copy');
  return (
    <StyledContainer>
      <StyledField type="text" value={value} onChange={() => {}} />
      <StyledCopy
        onClick={() => {
          copyToClipboard(value);
          setCopyMessage('copied!');
          setTimeout(() => {
            setCopyMessage('copy');
          }, 1500);
        }}
      >
        {copyMessage}
      </StyledCopy>
    </StyledContainer>
  );
};

const copyToClipboard = (text: string): undefined => {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  return;
};

export default Field;
