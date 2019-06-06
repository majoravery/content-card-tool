import styled, { css } from "styled-components";
import { black, platinum, raven} from "./colors";

export const Button = styled.div`
  border: 1px solid ${platinum};
  display: inline-block;
  padding: 1em;
  cursor: pointer;

  &:hover {
    border-color: ${raven};
  }
`;

type KindButtonProps = {
  selected: boolean;
};
export const KindButton = styled(Button)<KindButtonProps>`
  ${props =>
    props.selected &&
    css`
      border-color: ${black};

      &:hover {
        border-color: ${black};
      }
    `};
`;
