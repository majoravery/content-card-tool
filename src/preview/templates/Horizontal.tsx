import React from "react";
import styled from "styled-components";
import { InAppConfig } from "../../InAppConfig";

import { VerticalImage } from "../components/Image";
import { Headline } from "../components/Headline";
import { PrimaryButton } from "../components/Buttons";
import { Description } from "../components/Description";
import { LegalText } from "../components/LegalText";

type HorizontalProps = {
  config: InAppConfig;
};

const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
`;

export const Horizontal: React.FC<HorizontalProps> = ({
  config: { headline, buttons, text, legalText }
}) => {
  return (
    <HorizontalContainer>
      <VerticalImage src="https://placekitten.com/600/600" />
      <ContentContainer>
        <div>
          <Headline>{headline}</Headline>
          <PrimaryButton href={buttons.primary.link}>
            {buttons.primary.text}
          </PrimaryButton>
          <Description>{text}</Description>
          {legalText && <LegalText>{legalText}</LegalText>}
        </div>
      </ContentContainer>
    </HorizontalContainer>
  );
};
