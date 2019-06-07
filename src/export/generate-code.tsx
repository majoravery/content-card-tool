import React from "react";
import ReactDOMServer from "react-dom/server";
import * as StyledComponents from "styled-components";

import { InAppConfig } from "../InAppConfig";
import { PreviewContent } from "../preview/Preview";

const {
  __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS
} = StyledComponents as any;
const { StyleSheet } = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS;

type ExportWrapperProps = {
  css: string;
  body: string;
};
export const ExportWrapper: React.FC<ExportWrapperProps> = ({ css, body }) => (
  <html>
    <head dangerouslySetInnerHTML={{ __html: css }} />
    <body dangerouslySetInnerHTML={{ __html: body }} />
  </html>
);

export default function generateCode(config: InAppConfig) {
  StyleSheet.reset(false);
  const renderedHTML = ReactDOMServer.renderToString(
    <PreviewContent config={config} />
  );
  const renderedCSS = StyleSheet.instance.toHTML();

  return ReactDOMServer.renderToString(
    <ExportWrapper css={renderedCSS} body={renderedHTML} />
  );
}
