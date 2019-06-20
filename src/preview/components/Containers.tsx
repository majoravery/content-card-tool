import styled from "styled-components";

const contentPadding = 24;
const contentNoImagePadding = 60;

export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HorizontalTemplateContainer = styled(HorizontalContainer)`
  width: 790px;
  min-height: 350px;
`;

export const HorizontalContentContainer = styled(HorizontalContainer)`
  padding: ${contentPadding}px;
`;

export const VerticalContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const VerticalTemplateContainer = styled(VerticalContainer)`
  width: 520px;
`;

export const VerticalContentContainer = styled(VerticalContainer)`
  padding: ${contentPadding}px;
`;

export const VerticalContentContainerNoImage = styled(VerticalContainer)`
  padding: ${contentNoImagePadding}px ${contentPadding}px;
`;
