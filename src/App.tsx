import React, { useState } from "react";
import { InAppConfig, Horizontal } from "./InAppConfig";
import Editor from "./editor/Editor";
import Preview from "./preview/Preview";

const emptyButton = { text: "", link: "" };
const emptyConfig = {
  kind: Horizontal,
  headline: "",
  imageUrl: "",
  text: "",
  buttons: {
    primary: emptyButton,
    secondary: emptyButton
  }
};

const App: React.FC = () => {
  const [config, setConfig] = useState<InAppConfig>(emptyConfig);
  return (
    <React.Fragment>
      <Editor config={config} setConfig={setConfig} />
      <Preview config={config} />
    </React.Fragment>
  );
};

export default App;
