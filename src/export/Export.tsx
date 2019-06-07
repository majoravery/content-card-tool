import React, { useState } from "react";
import styled from "styled-components";
import { InAppConfig } from "../InAppConfig";
import { Button } from "../editor/Buttons";
import generateCode from "./generate-code";

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
`;

type ExportProps = {
  config: InAppConfig;
};

const Export: React.FC<ExportProps> = ({ config }) => {
  const [exportVisible, setExportVisible] = useState(false);
  return (
    <VerticalContainer>
      <div>
        <Button
          onClick={() => {
            setExportVisible(!exportVisible);
          }}
        >
          Export Code
        </Button>
      </div>
      {exportVisible && <TextArea defaultValue={generateCode(config)} />}
    </VerticalContainer>
  );
};

export default Export;
