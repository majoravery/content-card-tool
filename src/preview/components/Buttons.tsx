import styled, { css } from "styled-components";
import { soundcloudOrange, white, umber } from "../../colors";

type ButtonProps = {
  minWidth?: number;
  stretch?: boolean;
};

export const PrimaryButton = styled.a<ButtonProps>`
  border-radius: 4px;
  background-color: ${soundcloudOrange};
  padding: 14px 12px;
  font-size: 17px;
  border: 0;
  letter-spacing: 0.4px;
  color: ${white};
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  margin: 12px 0;

  &:hover {
    background-color: ${umber};
  }

  ${props =>
    props.minWidth &&
    css`
      min-width: ${props.minWidth}px;
    `}
  ${props =>
    props.stretch &&
    css`
      width: 100%;
    `}
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 1px solid ${soundcloudOrange};
  color: ${soundcloudOrange};

  &:hover {
    background-color: ${soundcloudOrange};
    color: ${white};
  }
`;
