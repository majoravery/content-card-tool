import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { InAppConfig, Horizontal } from "../InAppConfig";
import { Horizontal as HorizontalTemplate } from "./templates/Horizontal";
import { Modal } from "./components/Modal";

type PreviewProps = {
  config: InAppConfig;
};

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Interstate-Black';
    src: local('☁'),
      url(https://checkout.sndcdn.com/8aa2d73d93ade3970558828d15ff7add.woff)
        format('woff');
    font-weight: bold;
  }
`;

const Container = styled.div`
  font-family: "Interstate";
`;

const PreviewContainer = styled.div`
  position: relative;
  width: 800px;
  height: 700px;
`;

const Preview: React.FC<PreviewProps> = ({ config }) => {
  return (
    <div>
      <h2>Preview</h2>
      <PreviewContainer>
        <PreviewContent config={config} />
      </PreviewContainer>
    </div>
  );
};

export const PreviewContent: React.FC<PreviewProps> = ({ config }) => {
  const Template = config.kind === Horizontal ? HorizontalTemplate : undefined;
  return (
    <React.Fragment>
      <GlobalStyles />
      <link
        rel="stylesheet"
        href="https://style.sndcdn.com/css/interstate-9a7e854c95d1b49e3807d5ea457e6e538034dc55.css"
      />
      <Modal>
        <Container>{Template && <Template config={config} />}</Container>
      </Modal>
    </React.Fragment>
  );
};

export default Preview;
