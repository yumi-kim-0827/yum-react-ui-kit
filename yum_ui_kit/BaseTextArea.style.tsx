import React from "react";
import styled from "styled-components";

interface BaseTextAreaProps {
  colorhex: string;
  placeholder?: string;
}

export const BaseTextArea = styled.textarea<BaseTextAreaProps>`
  padding: 10px;
  width: 100%;
  height: 100px;
  border: 1px solid ${(props) => props.colorhex};
  &:focus {
    border-bottom: 3px solid ${(props) => props.colorhex};
  }
  resize: none;
`;
