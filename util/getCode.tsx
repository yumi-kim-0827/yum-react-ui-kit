import {
  BaseButton,
  GradientButton,
  OutlineButton,
  BaseInput,
} from "@/sourceCode/code";

export const getCode = (
  componentName: string,
  colorHex: string,
  subColor: string
) => {
  switch (componentName) {
    case "BaseButton":
      return `import styled from "styled-components";

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
        background-color: ${colorHex};
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
    case "GradientButton":
      return GradientButton;
    case "OutlineButton":
      return OutlineButton;
    case "BaseInput":
      return BaseInput;
  }
};
