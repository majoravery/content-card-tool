import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { InAppConfig } from "../InAppConfig";
import { PrimaryButton, SecondaryButton } from "./components/Buttons";
import { Headline } from "./components/Headline";
import { Description } from "./components/Description";
import { LegalText } from "./components/LegalText";
import { VerticalImage } from "./components/Image";

type PreviewProps = {
  config: InAppConfig;
};

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Interstate-Black';
    src: local('☁'),
      url(https://checkout.sndcdn.com/8aa2d73d93ade3970558828d15ff7add.woff)
        format('woff');
    font-weight: bold;
  }
`;

const Container = styled.div`
  font-family: "Interstate";
`;

const Preview: React.FC<PreviewProps> = ({ config }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <link
        rel="stylesheet"
        href="https://style.sndcdn.com/css/interstate-9a7e854c95d1b49e3807d5ea457e6e538034dc55.css"
      />
      <Container>
        <VerticalImage src="https://placekitten.com/600/600" />
        <Headline>This is the headline, isn't it cool?</Headline>
        <PrimaryButton>Test text</PrimaryButton>
        <SecondaryButton>Test text</SecondaryButton>
        <Description>
          This is a super long text!!This is a super long text!!This is a super
          long text!!This is a super long text!!
        </Description>
        <LegalText>* This is the legal text</LegalText>
      </Container>
      <h2>Preview (only renders the config for now)</h2>

      {JSON.stringify(config, null, 2)}
    </React.Fragment>
  );
};

export default Preview;
