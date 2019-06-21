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
  const hasSecondaryButton = secondary && secondary.text;
  return (
    <VerticalTemplateContainer>
      {imageUrl && <HorizontalImage src={imageUrl} />}
      <ContentContainer style={{ textAlign: "center" }}>
        <Headline>{headline}</Headline>
        <Description>{text}</Description>
        <ButtonContainer
          style={{
            marginBottom: "12px",
            marginTop: "12px",
            alignItems: buttonsStacked ? "initial" : "center"
          }}
        >
          {buttonsStacked && (
            <React.Fragment>
              <PrimaryButton
                href={primary.link}
                style={{ marginBottom: hasSecondaryButton ? "16px" : 0 }}
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
              {hasSecondaryButton && (
                <SecondaryButton
                  href={secondary.link}
                  stretch={true}
                  style={{ marginRight: "12px" }}
                >
                  {secondary.text}
                </SecondaryButton>
              )}
              <PrimaryButton href={primary.link} stretch={true}>
                {primary.text}
              </PrimaryButton>
            </React.Fragment>
          )}
        </ButtonContainer>
        {legalText && (
          <LegalText style={{ textAlign: "left" }}>{legalText}</LegalText>
        )}
      </ContentContainer>
    </VerticalTemplateContainer>
  );
};
