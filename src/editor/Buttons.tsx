import styled, { css } from "styled-components";

export const Button = styled.div`
  border: 1px solid #ccc;
  display: inline-block;
  padding: 1em;
  cursor: pointer;

  &:hover {
    border-color: #999;
  }
`;

type KindButtonProps = {
  selected: boolean;
};
export const KindButton = styled(Button)<KindButtonProps>`
  ${props =>
    props.selected &&
    css`
      border-color: #000;

      &:hover {
        border-color: #000;
      }
    `};
`;
