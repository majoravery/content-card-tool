import React from 'react';
import styled from 'styled-components';
import { ContentCardConfig } from '../ContentCardConfig';
import Field from './Field';
import generateKvp from './generate-code';

const StyledLabel = styled.div`
  margin-bottom: 0.3em;
`;

const StyledFieldContainer = styled.div`
  margin-bottom: 1em;
`;

type ExportProps = {
  config: ContentCardConfig;
};

const Export: React.FC<ExportProps> = ({ config }) => {
  const kvp = generateKvp(config);
  return (
    <div>
      <h2>Export</h2>
      <StyledLabel>Key value pairs</StyledLabel>
      {Object.keys(kvp).map((key) => {
        return (
          <StyledFieldContainer key={key}>
            <Field value={key} />
            <Field value={kvp[key]} />
          </StyledFieldContainer>
        );
      })}
    </div>
  );
};

export default Export;
