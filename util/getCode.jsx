import { BaseButton, GradientButton, OutlineButton } from "@/sourceCode/code";

export const getCode = (componentName) => {
  switch (componentName) {
    case "BaseButton":
      return BaseButton;
    case "GradientButton":
      return GradientButton;
    case "OutlineButton":
      return OutlineButton;
  }
};
