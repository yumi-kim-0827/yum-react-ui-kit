export const getCode = (
  componentName: string,
  colorHex: string,
  subColorHex: string
) => {
  switch (componentName) {
    //BaseButton
    case "BaseButton":
      return `
import styled from "styled-components";

export const BaseButton = styled.button\`
  width: 100%;
  max-width: 200px;
  height: 60px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  border-radius: 200px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-color: ${colorHex};
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
    //GradientButton
    case "GradientButton":
      return `
import styled from "styled-components";

export const GradientButton = styled.button\`
  width: 100%;
  max-width: 200px;
  height: 60px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  border-radius: 200px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    ${colorHex},
    ${subColorHex}
  );
  background-size: 150% 100%;
  &:hover {
    background-position: 100% 0;
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
    //OutlineButton
    case "OutlineButton":
      return `
import styled from "styled-components";

export const GradientButton = styled.button\`
  width: 100%;
  max-width: 200px;
  height: 60px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  border-radius: 200px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background: linear-gradient(#fff, #fff) padding-box,
  linear-gradient(
  60deg,
  ${colorHex},
  ${subColorHex}
    )
  border-box;
  &:hover {
    background-position: 100% 0;
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
    //BaseInput
    case "BaseInput":
      return `
import styled from "styled-components";

export const BaseInput = styled.input\`
  padding: 10px;
  width: 100%;
  height: 60px;
  border: 1px solid ${colorHex};
  &:focus {
  border-bottom: 3px solid ${colorHex};
  }
\`;
    `;
    //BaseTextArea
    case "BaseTextArea":
      return `
import styled from "styled-components";

export const BaseTextArea = styled.textarea\`
  padding: 10px;
  width: 100%;
  height: 100px;
  border: 1px solid ${colorHex};
  &:focus {
    border-bottom: 3px solid ${colorHex};
  }
  resize: none;
  \`;
      `;
    //FileInput
    case "FileInput":
      return `
import styled from "styled-components";

export const FileInput = styled.input.attrs({
  type: "file",
  accept: "image/png, image/jpeg",
})\`
  padding: 10px;
  background-color: #fff;
  border: 1px solid ${colorHex};
  input {
    display: none;
  }
\`;
`;
  }
};
