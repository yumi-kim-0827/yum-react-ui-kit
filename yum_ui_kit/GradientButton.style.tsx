import styled from "styled-components";
import { BaseButton } from "@/yum_ui_kit/BaseButton.style";

interface ButtonProps {
  colorhex: string;
  subcolorhex: string;
}

export const GradientButton = styled(BaseButton)<ButtonProps>`
  background-image: linear-gradient(
    90deg,
    ${(props) => props.colorhex},
    ${(props) => props.subcolorhex}
  );
  background-size: 150% 100%;
  transition: background 0.4s ease-in-out;
  &:hover {
    background-position: 100% 0;
  }
`;
