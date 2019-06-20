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
  HorizontalContainer,
  VerticalContainer
} from "../components/Containers";
import { TemplateProps } from "./Template";

export const Vertical: React.FC<TemplateProps> = ({
  config: {
    imageUrl,
    headline,
    buttons: { primary, secondary },
    buttonsStacked,
    text,
    legalText
  }
}) => {
  const ContentContainer = imageUrl
    ? VerticalContentContainer
    : VerticalContentContainerNoImage;
  const ButtonContainer = buttonsStacked
    ? VerticalContainer
    : HorizontalContainer;
  return (
    <VerticalTemplateContainer>
      {imageUrl && <HorizontalImage src={imageUrl} />}
      <ContentContainer style={{ textAlign: "center" }}>
        <Headline>{headline}</Headline>
        <Description>{text}</Description>
        <div>
          <ButtonContainer>
            {buttonsStacked && (
              <React.Fragment>
                <PrimaryButton
                  href={primary.link}
                  style={{ marginBottom: "16px" }}
                >
                  {primary.text}
                </PrimaryButton>
                {secondary && secondary.text && (
                  <SecondaryButton href={secondary.link}>
                    {secondary.text}
                  </SecondaryButton>
                )}
              </React.Fragment>
            )}

            {!buttonsStacked && (
              <React.Fragment>
                {secondary && secondary.text && (
                  <SecondaryButton
                    href={secondary.link}
                    style={{ marginRight: "12px" }}
                  >
                    {secondary.text}
                  </SecondaryButton>
                )}
                <PrimaryButton href={primary.link}>
                  {primary.text}
                </PrimaryButton>
              </React.Fragment>
            )}
          </ButtonContainer>
        </div>
        {legalText && (
          <LegalText style={{ textAlign: "left" }}>{legalText}</LegalText>
        )}
      </ContentContainer>
    </VerticalTemplateContainer>
  );
};
