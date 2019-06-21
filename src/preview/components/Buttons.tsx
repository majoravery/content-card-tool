import React from "react";
import styled, { css } from "styled-components";
import { soundcloudOrange, white, umber } from "../../colors";

type ButtonProps = {
  minWidth?: number;
  stretch?: boolean;
};

export const Button: React.FunctionComponent<
  ButtonProps & React.HTMLProps<HTMLAnchorElement>
> = ({ children, stretch, minWidth, ...otherProps }) => (
  <a {...otherProps}>
    <span>{children}</span>
  </a>
);

export const PrimaryButton = styled(Button)`
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
  display: inline-flex;
  justify-content: center;
  align-items: center;

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
      flex: 1 1 0;
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
