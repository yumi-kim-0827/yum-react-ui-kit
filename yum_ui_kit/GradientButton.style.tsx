import styled from "styled-components";
import { BaseButton } from "@/yum_ui_kit/BaseButton.style";

interface ButtonProps {
  colorhex: string;
  subcolorhex: string;
}

export const GradientButton = styled(BaseButton)<ButtonProps>`
  background-image: linear-gradient(
    ${(props) => props.colorhex},
    ${(props) => props.subcolorhex}
  );
  background-size: 150% 100%;
  &:hover {
    background-position: 100% 0;
  }
`;
