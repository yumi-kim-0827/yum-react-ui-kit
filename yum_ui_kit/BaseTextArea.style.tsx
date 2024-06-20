import React from "react";
import styled from "styled-components";

interface BaseTextAreaProps {
  r?: number;
  g?: number;
  b?: number;
  a?: number;
}

export const BaseTextArea = styled.textarea<BaseTextAreaProps>`
  padding: 10px;
  width: 100%;
  height: 100px;
  resize: none;
  border: 1px solid
    rgba(
      ${(props) => props.r || 0},
      ${(props) => props.g || 0},
      ${(props) => props.b || 0},
      ${(props) => props.a || 1}
    );
  &:focus {
    border-bottom: 3px solid
      rgba(
        ${(props) => props.r || 0},
        ${(props) => props.g || 0},
        ${(props) => props.b || 0},
        ${(props) => props.a || 1}
      );
  }
`;
