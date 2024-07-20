import styled from "styled-components";

interface ButtonProps {
  colorhex: string;
  subcolorhex: string;
}

export const BaseButton = styled.button<ButtonProps>`
  padding: 20px;
  width: 100%;
  max-width: 200px;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => props.colorhex};
  font-weight: bold;
  border-radius: 200px;
  transition: background 0.4s ease-in-out;
  &:hover {
    background-color: ${(props) => props.subcolorhex};
  }
`;
