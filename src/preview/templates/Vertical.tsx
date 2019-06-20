import React from "react";

import { HorizontalImage } from "../components/Image";
import { Headline } from "../components/Headline";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { Description } from "../components/Description";
import { LegalText } from "../components/LegalText";
import {
  VerticalTemplateContainer,
  VerticalContentContainer,
  VerticalContentContainerNoImage,
  HorizontalContainer
} from "../components/Containers";
import { TemplateProps } from "./Template";

export const Vertical: React.FC<TemplateProps> = ({
  config: {
    imageUrl,
    headline,
    buttons: { primary, secondary },
    text,
    legalText
  }
}) => {
  const ContentContainer = imageUrl
    ? VerticalContentContainer
    : VerticalContentContainerNoImage;
  return (
    <VerticalTemplateContainer>
      {imageUrl && <HorizontalImage src={imageUrl} />}
      <ContentContainer style={{ textAlign: "center" }}>
        <Headline>{headline}</Headline>
        <Description>{text}</Description>
        <div>
          <HorizontalContainer>
            {secondary && secondary.text && (
              <SecondaryButton
                href={secondary.link}
                style={{ marginRight: "12px" }}
                stretch={true}
              >
                {secondary.text}
              </SecondaryButton>
            )}
            <PrimaryButton href={primary.link} stretch={true}>
              {primary.text}
            </PrimaryButton>
          </HorizontalContainer>
        </div>
        {legalText && (
          <LegalText style={{ textAlign: "left" }}>{legalText}</LegalText>
        )}
      </ContentContainer>
    </VerticalTemplateContainer>
  );
};
