import React from "react";
import styled from "styled-components";
import extractFunctionBody from "../../lib/extract-function-body";

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
  padding: 76px 0px;
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
  cursor: pointer;
`;

const ModalContent = styled.div`
  background-color: #fff;
  overflow: auto;
  max-height: 100%;
`;

/**
 * This function gets statically inlined and will only execute in the
 * exported code. It can not depend on variables outside of its own scope.
 */
function closeModal() {
  function close() {
    (window as any).appboyBridge.closeMessage();
  }
  const closeButton = document.querySelector(".js-inAppModal__close");
  if (closeButton) {
    closeButton.addEventListener("click", close);
  }

  // Close modal with ESC
  document.addEventListener("keyup", event => {
    if (event.keyCode === 27) {
      close();
    }
  });

  // Close modal when background clicked
  const modalContent = document.querySelector(".js-inAppModal__content");
  let clickStartedInside = false;
  if (modalContent) {
    modalContent.addEventListener("click", () => (clickStartedInside = true));
  }

  document.addEventListener("click", () => {
    if (clickStartedInside) {
      clickStartedInside = false;
      return;
    }

    close();
  });
}

export const Modal: React.FC = ({ children }) => {
  return (
    <ModalElement>
      <ModalClose className="js-inAppModal__close" />
      <ModalContent className="js-inAppModal__content">{children}</ModalContent>

      <script
        dangerouslySetInnerHTML={{ __html: extractFunctionBody(closeModal) }}
      />
    </ModalElement>
  );
};
