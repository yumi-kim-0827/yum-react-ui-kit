export const BaseButton = `import styled from "styled-components";

interface ButtonProps {
  r?: number;
  g?: number;
  b?: number;
  a?: number;
}

export const BaseButton = styled.button<ButtonProps>\`
  width: 100%;
  max-width: 200px;
  height: 60px;
  cursor: pointer;
  color: #fff;
  background-color: rgba(
    \${(props) => props.r || 0},
    \${(props) => props.g || 0},
    \${(props) => props.b || 0},
    \${(props) => props.a || 1}
  );
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
\`;
`;

export const GradientButton = `import styled from "styled-components";
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

export const GradientButton = styled(BaseButton)<ButtonProps>\`
  background-image: linear-gradient(
    to right,
    rgba(
      \${(props) => props.r || 0},
      \${(props) => props.g || 0},
      \${(props) => props.b || 0},
      \${(props) => props.a || 1}
    ),
    rgba(
      \${(props) => props.rSub || 0},
      \${(props) => props.gSub || 0},
      \${(props) => props.bSub || 0},
      \${(props) => props.aSub || 1}
    )
  );
  background-size: 150% 100%;
  &:hover {
    background-position: 100% 0;
  }
\`;
`;

export const OutlineButton = `import styled from "styled-components";
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

export const OutlineButton = styled(BaseButton)<ButtonProps>\`
  color: #000;
  background-color: #fff;
  border: 1px solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(
        60deg,
        rgba(
          \${(props) => props.r || 0},
          \${(props) => props.g || 0},
          \${(props) => props.b || 0},
          \${(props) => props.a || 1}
        ),
        rgba(
          \${(props) => props.rSub || 0},
          \${(props) => props.gSub || 0},
          \${(props) => props.bSub || 0},
          \${(props) => props.aSub || 1}
        )
      )
      border-box;
  &:hover {
    background-position: 100% 0;
  }
\`;
`;
