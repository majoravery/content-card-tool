import styled, { css } from 'styled-components';
import { black, platinum, raven } from '../colors';

export const StyledButton = styled.div`
  border: 1px solid ${platinum};
  display: inline-block;
  padding: 0.5em 1em;
  cursor: pointer;

  &:hover {
    border-color: ${raven};
  }
`;

type ButtonProps = {
  selected: boolean;
};
export const Button = styled(StyledButton)<ButtonProps>`
  ${(props) =>
    props.selected &&
    css`
      border-color: ${black};

      &:hover {
        border-color: ${black};
      }
    `};
`;
