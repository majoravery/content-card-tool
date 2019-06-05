import React from "react";
import { InAppConfig, InAppKinds, InAppKind } from "../InAppConfig";
import { KindButton } from "./Buttons";
import Export from "./Export";
import Form from "./Form";

type KindSetter = React.Dispatch<React.SetStateAction<InAppConfig>>;

type EditorProps = {
  config: InAppConfig;
  setConfig: KindSetter;
};

const Editor: React.FC<EditorProps> = ({ config, setConfig }) => {
  return (
    <React.Fragment>
      <h2>Editor</h2>
      {InAppKinds.map(kind => (
        <KindButton
          key={kind}
          selected={kind === config.kind}
          onClick={setKind(kind, config, setConfig)}
        >
          {kind}
        </KindButton>
      ))}
      <Form config={config} setConfig={setConfig} />
      <h3>Export</h3>
      <Export config={config} />
    </React.Fragment>
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
