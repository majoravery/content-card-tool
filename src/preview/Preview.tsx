import React from "react";
import styled from "styled-components";
import { InAppConfig, Horizontal, InAppKind, Vertical } from "../InAppConfig";
import { Horizontal as HorizontalTemplate } from "./templates/Horizontal";
import { Vertical as VerticalTemplate } from "./templates/Vertical";
import { Modal } from "./components/Modal";

type PreviewProps = {
  config: InAppConfig;
};

const Container = styled.div`
  font-family: "Interstate";
`;

const PreviewContainer = styled.div`
  position: relative;
  width: 850px;
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
  const Template = getTemplate(config.kind);
  return (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="https://style.sndcdn.com/css/interstate-9a7e854c95d1b49e3807d5ea457e6e538034dc55.css"
      />
      <link
        rel="stylesheet"
        href="https://style.sndcdn.com/css/interstate-black-7f3b53f03ea97c0871dc7f62474617224e3aa7e1.css"
      />
      <Modal>
        <Container>{Template && <Template config={config} />}</Container>
      </Modal>
    </React.Fragment>
  );
};

function getTemplate(kind: InAppKind) {
  switch (kind) {
    case Horizontal:
      return HorizontalTemplate;
    case Vertical:
      return VerticalTemplate;
    default:
      return null;
  }
}

export default Preview;
