import styled from "styled-components";
import { BaseButton } from "@/yum_ui_kit/BaseButton.style";

interface ButtonProps {
  colorhex: string;
  subcolorhex: string;
}

export const OutlineButton = styled(BaseButton)<ButtonProps>`
  color: #000;
  background-color: #fff;
  border: 1px solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(
        90deg,
        ${(props) => props.colorhex},
        ${(props) => props.subcolorhex}
      )
      border-box;
  background-size: 150% 100%;
  transition: background 0.4s ease-in-out;
  &:hover {
    background-position: 100% 0;
  }
`;
