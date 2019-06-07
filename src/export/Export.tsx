import React, { useState } from "react";
import styled from "styled-components";
import { InAppConfig } from "../InAppConfig";
import { Button } from "../editor/Buttons";
import generateCode from "./generate-code";
import { raven } from "../colors";

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CopyMessage = styled.div`
  margin: 10px 0px;
  color: ${raven};
`;

type ExportProps = {
  config: InAppConfig;
};

const Export: React.FC<ExportProps> = ({ config }) => {
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  return (
    <VerticalContainer>
      <Button
        onClick={() => {
          copyToClipboard(generateCode(config));
          setShowCopyMessage(true);
          setTimeout(() => setShowCopyMessage(false), 3000);
        }}
      >
        Export Code
      </Button>
      {showCopyMessage && <CopyMessage>Copied to clipboard!</CopyMessage>}
    </VerticalContainer>
  );
};

const copyToClipboard = (text: string) => {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

export default Export;
