import styled from "styled-components";

type ImageProps = {
  src: string;
};

export const Image = styled.div<ImageProps>`
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.src});
  flex-shrink: 0;
`;

export const VerticalImage = styled(Image)`
  width: 250px;
  min-height: 350px;
`;
