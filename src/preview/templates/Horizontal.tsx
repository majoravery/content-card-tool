import React from "react";
import styled from "styled-components";
import { InAppConfig } from "../../InAppConfig";

import { VerticalImage } from "../components/Image";
import { Headline } from "../components/Headline";
import { PrimaryButton } from "../components/Buttons";
import { Description } from "../components/Description";
import { LegalText } from "../components/LegalText";
import { HorizontalContainer } from "../components/Containers";

type HorizontalProps = {
  config: InAppConfig;
};

const ContentContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Horizontal: React.FC<HorizontalProps> = ({
  config: { imageUrl, headline, buttons, text, legalText }
}) => {
  return (
    <HorizontalContainer>
      <VerticalImage src={imageUrl} />
      <ContentContainer>
        <Headline>{headline}</Headline>
        <Description>{text}</Description>
        <div>
          <PrimaryButton href={buttons.primary.link}>
            {buttons.primary.text}
          </PrimaryButton>
        </div>
        {legalText && <LegalText>{legalText}</LegalText>}
      </ContentContainer>
    </HorizontalContainer>
  );
};
