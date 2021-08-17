import React from 'react';
import styled from 'styled-components';

import { ContentCardConfig, DashboxImage } from '../ContentCardConfig';

const DashboxWrapper = styled.div`
  height: 250px;
  margin: 0 0 25px 0;
  width: 300px;
  overflow: hidden;
`;

const LinkWrapper = styled.a`
  background: #c6c6c6;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  opacity: 1;
  padding: 20px 0 22px;
  text-align: left;
  transition: opacity 0.2s linear;
  text-decoration: none;
`;

const ContentWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 0 0 180px;
  height: 100%;
  padding-left: 18px;
`;

const TitleLine = styled.h2`
  color: #ffffff;
  font-size: 21px;
  font-weight: 900;
  line-height: 1.09;
  text-transform: uppercase;
  margin: 0;

  // interstate-black
  font-family: 'Interstate-Black', 'Interstate';
`;

const BodyLine = styled.p`
  color: #ffffff;
  font-family: Interstate;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.19;
  margin-bottom: 10px;
  margin-top: 7px;
`;

const Cta = styled.div`
  align-items: flex-end;
  display: flex;
  flex-grow: 1;
  position: relative;
  text-align: center;
`;

const CtaButton = styled.div`
  // sc-button
  display: inline-block;
  position: relative;
  margin: 0;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  cursor: pointer;
  font-family: 'Interstate', 'Lucida Grande', 'Lucida Sans Unicode',
    'Lucida Sans', Garuda, Verdana, Tahoma, sans-serif;
  font-weight: 100;
  text-align: center;
  box-sizing: border-box;

  // sc-button-cta
  background-color: #f50;
  border-color: #f50;
  color: #fff;

  // sc-button-large
  font-size: 16px;
  line-height: 18px;
  padding: 10px 15px;
  height: 40px;

  // sc-truncate
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
`;

const Side = styled.div`
  display: flex;
  flex: 0 0 120px;
  justify-content: flex-end;
`;

const SideImage = styled.img`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  object-fit: cover;
  width: 110px;
`;

const SideIcon = styled.img`
  object-fit: contain;
  margin: auto;
  width: 48px;
`;

export const Template: React.FC<TemplateProps> = ({
  config: { layout, title, description, background, ctaText }
}) => {
  const isImageLayout = layout === DashboxImage;
  const imgSrc = isImageLayout
    ? 'https://placekitten.com/110/220'
    : 'https://placekitten.com/108/110';

  return (
    <DashboxWrapper>
      <LinkWrapper href="#" style={{ background }}>
        <ContentWrap>
          <div className="dashbox__content{{$unless body ' m-centerVertically'}}">
            <TitleLine>{title}</TitleLine>
            <BodyLine>{description}</BodyLine>
          </div>
          <Cta>
            <CtaButton>{ctaText}</CtaButton>
          </Cta>
        </ContentWrap>
        <Side>
          {isImageLayout ? (
            <SideImage src={imgSrc} alt="" />
          ) : (
            <SideIcon src={imgSrc} alt="" />
          )}
        </Side>
      </LinkWrapper>
    </DashboxWrapper>
  );
};

type TemplateProps = {
  config: ContentCardConfig;
};
