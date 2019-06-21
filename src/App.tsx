import React, { useState } from "react";
import styled from "styled-components";
import { InAppConfig, Vertical } from "./InAppConfig";
import Editor from "./editor/Editor";
import Preview from "./preview/Preview";
import Export from "./export/Export";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 5em;
  max-width: 1150px;

  @media (max-width: 1200px) {
    padding: 1em;
  }
}`;

const EditorPreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const emptyConfig = {
  kind: Vertical,
  headline: "Get 10% off Soundcloud pro unlimited",
  imageUrl: "https://placekitten.com/520/200",
  text:
    "Make sure you’re staying on track. Renew today to regain access to advanced stats, more upload time, spotlight, and quiet mode for 10% off the annual price.",
  buttons: {
    primary: { text: "Renew Pro Unlimited", link: "" },
    secondary: { text: "Secondary", link: "" }
  },
  buttonsStacked: true,
  legalText: "*Discount applies to first year only"
};

const App: React.FC = () => {
  const [config, setConfig] = useState<InAppConfig>(emptyConfig);
  return (
    <AppContainer>
      <EditorPreviewContainer>
        <Editor config={config} setConfig={setConfig} />
        <Preview config={config} />
      </EditorPreviewContainer>
      <Export config={config} />
    </AppContainer>
  );
};

export default App;
