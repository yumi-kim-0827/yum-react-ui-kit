import React from "react";
import styled from "styled-components";
//Components

interface ModalProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  background-color: #ffffff;
`;

const Modal: React.FC<ModalProps> = ({ onClick, children }) => {
  return (
    <ModalOverlay onClick={onClick}>
      <ModalContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
