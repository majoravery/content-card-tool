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
  width: 100%;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  text-align: center;

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
