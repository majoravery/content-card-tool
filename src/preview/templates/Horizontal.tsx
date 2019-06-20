import React from "react";

import { VerticalImage } from "../components/Image";
import { Headline } from "../components/Headline";
import { PrimaryButton } from "../components/Buttons";
import { Description } from "../components/Description";
import { LegalText } from "../components/LegalText";
import {
  HorizontalTemplateContainer,
  VerticalContentContainer
} from "../components/Containers";
import { TemplateProps } from "./Template";

export const Horizontal: React.FC<TemplateProps> = ({
  config: { imageUrl, headline, buttons, text, legalText }
}) => {
  return (
    <HorizontalTemplateContainer>
      <VerticalImage src={imageUrl} />
      <VerticalContentContainer>
        <Headline>{headline}</Headline>
        <Description>{text}</Description>
        <div>
          <PrimaryButton href={buttons.primary.link} minWidth={224}>
            {buttons.primary.text}
          </PrimaryButton>
        </div>
        {legalText && <LegalText>{legalText}</LegalText>}
      </VerticalContentContainer>
    </HorizontalTemplateContainer>
  );
};
