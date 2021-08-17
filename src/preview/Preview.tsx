import React from 'react';
import styled from 'styled-components';
import { ContentCardConfig } from '../ContentCardConfig';
import { Template } from './Template';

type PreviewProps = {
  config: ContentCardConfig;
};

const PreviewContainer = styled.div`
  position: relative;
  width: 300px;
  height: 250px;
`;

export const ExternalCSS = `
  <link
    rel="stylesheet"
    href="https://style.sndcdn.com/css/interstate-9a7e854c95d1b49e3807d5ea457e6e538034dc55.css"
  />
  <link
    rel="stylesheet"
    href="https://style.sndcdn.com/css/interstate-black-7f3b53f03ea97c0871dc7f62474617224e3aa7e1.css"
  />
`;

const Preview: React.FC<PreviewProps> = ({ config }) => {
  return (
    <div>
      <h2>Preview</h2>
      <PreviewContainer>
        <div dangerouslySetInnerHTML={{ __html: ExternalCSS }} />
        <Template config={config} />
      </PreviewContainer>
    </div>
  );
};

export default Preview;
