import styled from "styled-components";
import { soundcloudOrange, white, umber } from "../../colors";

export const PrimaryButton = styled.a`
  border-radius: 4px;
  background-color: ${soundcloudOrange};
  padding: 14px 12px;
  font-size: 17px;
  border: 0;
  letter-spacing: 0.4px;
  color: ${white};
  min-width: 224px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  margin: 12px 0;

  &:hover {
    background-color: ${umber};
  }
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
