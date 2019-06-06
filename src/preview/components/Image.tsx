import styled from "styled-components";

export const Image = styled.img`
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.src});
  flex-shrink: 0;
`;

export const VerticalImage = styled(Image)`
  width: 250px;
  height: 350px;
`;
