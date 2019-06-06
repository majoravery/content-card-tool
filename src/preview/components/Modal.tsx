import React from "react";
import styled from "styled-components";

const ModalElement = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(242, 242, 242, 0.9);
  justify-content: center;
  align-items: center;
`;

const ModalClose = styled.a`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 16px;
  height: 16px;
  padding: 4px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Q2xvc2U8L3RpdGxlPjxwYXRoIGQ9Ik0xMCA4LjU0NUwzLjQ1NSAyIDIgMy40NTUgOC41NDUgMTAgMiAxNi41NDUgMy40NTUgMTggMTAgMTEuNDU1IDE2LjU0NSAxOCAxOCAxNi41NDUgMTEuNDU1IDEwIDE4IDMuNDU1IDE2LjU0NSAyIDEwIDguNTQ1eiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+Cg==)
    center no-repeat;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 790px;
  height: 350px;
  overflow: auto;
`;

export const Modal: React.FC = ({ children }) => (
  <ModalElement>
    <ModalClose href="javascript:appboyBridge.closeMessage()" />
    <ModalContent>{children}</ModalContent>
  </ModalElement>
);
