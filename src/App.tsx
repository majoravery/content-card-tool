import React, { useState } from "react";
import { InAppConfig } from "./InAppConfig";
import Editor from "./editor/Editor";
import Preview from "./preview/Preview";

const App: React.FC = () => {
  const [config, setConfig] = useState<InAppConfig>({});
  return (
    <React.Fragment>
      <Editor config={config} setConfig={setConfig} />
      <Preview config={config} />
    </React.Fragment>
  );
};

export default App;
