import styled from "styled-components";

interface ButtonProps {
  colorhex: string;
}

export const BaseButton = styled.button<ButtonProps>`
  width: 100%;
  max-width: 200px;
  height: 60px;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => props.colorhex};
  font-weight: bold;
  border-radius: 200px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  &:hover {
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  &:focus {
    outline: none;
  }
`;
