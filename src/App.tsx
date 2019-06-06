import React, { useState } from "react";
import { InAppConfig, Horizontal } from "./InAppConfig";
import Editor from "./editor/Editor";
import Preview from "./preview/Preview";
import { HorizontalContainer } from "./preview/components/Containers";

const emptyButton = { text: "", link: "" };
const emptyConfig = {
  kind: Horizontal,
  headline: "Get 10% off Soundcloud pro unlimited",
  imageUrl: "https://placekitten.com/400/600",
  text:
    "Make sure you’re staying on track. Renew today to regain access to advanced stats, more upload time, spotlight, and quiet mode for 10% off the annual price.",
  buttons: {
    primary: { text: "Renew Pro Unlimited with 10% discount", link: "" },
    secondary: emptyButton
  },
  legalText: "*Discount applies to first year only"
};

const App: React.FC = () => {
  const [config, setConfig] = useState<InAppConfig>(emptyConfig);
  return (
    <HorizontalContainer>
      <div style={{ marginRight: 30 }}>
        <Editor config={config} setConfig={setConfig} />
      </div>
      <Preview config={config} />
    </HorizontalContainer>
  );
};

export default App;
