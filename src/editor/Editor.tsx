import React from "react";
import { InAppConfig, InAppKinds, InAppKind } from "../InAppConfig";
import { KindButton } from "./Buttons";
import Form from "./Form";
import styled from "styled-components";

const ButtonContainer = styled.div`
  margin-bottom: 1em;
`;

type KindSetter = React.Dispatch<React.SetStateAction<InAppConfig>>;

type EditorProps = {
  config: InAppConfig;
  setConfig: KindSetter;
};

const Editor: React.FC<EditorProps> = ({ config, setConfig }) => {
  return (
    <div>
      <h2>Editor</h2>
      <ButtonContainer>
        {InAppKinds.map(kind => (
          <KindButton
            key={kind}
            selected={kind === config.kind}
            onClick={setKind(kind, config, setConfig)}
          >
            {kind}
          </KindButton>
        ))}
      </ButtonContainer>
      <Form config={config} setConfig={setConfig} />
    </div>
  );
};

function setKind(kind: InAppKind, config: InAppConfig, setConfig: KindSetter) {
  return function() {
    setConfig({
      ...config,
      kind
    });
  };
}

export default Editor;
