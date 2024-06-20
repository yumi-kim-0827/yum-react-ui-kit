import React from "react";
import styled from "styled-components";

interface BaseFormFileProps {
  r?: number;
  g?: number;
  b?: number;
  a?: number;
}

export const BaseFormFile = styled.input.attrs({
  type: "file",
  accept: "image/png, image/jpeg",
})<BaseFormFileProps>`
  border: 1px solid
    rgba(
      ${(props) => props.r || 0},
      ${(props) => props.g || 0},
      ${(props) => props.b || 0},
      ${(props) => props.a || 1}
    );
  input {
    display: none;
  }
`;
