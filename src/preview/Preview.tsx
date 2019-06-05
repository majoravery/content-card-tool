import React from "react";
import { InAppConfig } from "../InAppConfig";

type PreviewProps = {
  config: InAppConfig;
};

const Preview: React.FC<PreviewProps> = ({ config }) => {
  return (
    <React.Fragment>
      <h2>Preview (only renders the config for now)</h2>
      {JSON.stringify(config, null, 2)}
    </React.Fragment>
  );
};

export default Preview;
