import styled from "styled-components";
import { BaseButton } from "@/yum_ui_kit/BaseButton.style";

interface ButtonProps {
  r?: number;
  g?: number;
  b?: number;
  a?: number;
  rSub?: number;
  gSub?: number;
  bSub: number;
  aSub: number;
}

export const ButtonWithIcon = styled(BaseButton)<ButtonProps>`
  background-image: linear-gradient(
    to right,
    rgba(
      ${(props) => props.r || 0},
      ${(props) => props.g || 0},
      ${(props) => props.b || 0},
      ${(props) => props.a || 1}
    ),
    rgba(
      ${(props) => props.rSub || 0},
      ${(props) => props.gSub || 0},
      ${(props) => props.bSub || 0},
      ${(props) => props.aSub || 1}
    )
  );
  background-size: 150% 100%;
  &:hover {
    background-position: 100% 0;
  }
`;
