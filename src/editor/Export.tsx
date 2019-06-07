import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { InAppConfig } from "../InAppConfig";
import { Button } from "./Buttons";
import * as StyledComponents from "styled-components";
import { PreviewContent } from "../preview/Preview";
const {
  __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS
} = StyledComponents as any;
const { StyleSheet } = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS;

type ExportProps = {
  config: InAppConfig;
};

const Export: React.FC<ExportProps> = ({ config }) => {
  const [exportVisible, setExportVisible] = useState(false);
  const [exportedCode, setExportedCode] = useState("");
  return (
    <React.Fragment>
      {
        <Button
          onClick={() => {
            setExportedCode(generateCode(config));
            setExportVisible(!exportVisible);
          }}
        >
          Export Code
        </Button>
      }
      {exportVisible && <textarea defaultValue={exportedCode} />}
    </React.Fragment>
  );
};

function generateCode(config: InAppConfig) {
  StyleSheet.reset(false);
  const renderedHTML = ReactDOMServer.renderToString(
    <PreviewContent config={config} />
  );
  const renderedCSS = StyleSheet.instance.toHTML();

  return `${renderedCSS}
  ${renderedHTML}`;
}

export default Export;
