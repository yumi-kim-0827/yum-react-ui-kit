import React from "react";
import styled from "styled-components";

interface FileInputProps {
  colorhex: string;
}

export const FileInput = styled.input.attrs({
  type: "file",
  accept: "image/png, image/jpeg",
})<FileInputProps>`
  padding: 10px;
  background-color: #fff;
  border: 1px solid ${(props) => props.colorhex};
  input {
    display: none;
  }
`;
