import React from "react";
import styled from "styled-components";

interface BaseInputProps {
  colorhex: string;
  placeholder?: string;
}

export const BaseInput = styled.input<BaseInputProps>`
  padding: 20px;
  width: 100%;
  border: 1px solid ${(props) => props.colorhex};
  &:focus {
    border-bottom: 3px solid ${(props) => props.colorhex};
  }
`;
