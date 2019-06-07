import React from "react";
import ReactDOMServer from "react-dom/server";
import * as StyledComponents from "styled-components";

import { InAppConfig } from "../InAppConfig";
import { PreviewContent } from "../preview/Preview";

const {
  __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS
} = StyledComponents as any;
const { StyleSheet } = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS;

export default function generateCode(config: InAppConfig) {
  StyleSheet.reset(false);
  const renderedHTML = ReactDOMServer.renderToString(
    <PreviewContent config={config} />
  );
  const renderedCSS = StyleSheet.instance.toHTML();

  return `${renderedCSS}
  ${renderedHTML}`;
}
