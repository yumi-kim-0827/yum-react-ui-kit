import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Grid from "@/components/Layout/Grid";
import CodeSnipet from "@/components/UI/CodeSnipet";
import ButtonWithIcon from "@/components/UI/ButtonWithIcon";
import { getCode } from "@/util/getCode";

interface PlayGounrdProps {
  children: React.ReactNode;
  colorHex: string;
  subColorHex: string;
}

const PlayGroundContainer = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`;

const PlayGroundHead = styled.div`
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  overflow-x: auto;
`;

const PlayGroundContent = styled.div`
  padding: 10px;
  overflow-x: auto;
`;

const PlayGround: React.FC<PlayGounrdProps> = ({
  children,
  colorHex,
  subColorHex,
}) => {
  const [componentName, setComponentName] = useState<string>("");

  const getComponentName = () => {
    if (React.isValidElement(children)) {
      const childType = children.type as any;
      if (childType?.styledComponentId) {
        const cutStringIdx = childType.styledComponentId.indexOf("style");
        if (cutStringIdx !== -1) {
          return childType.styledComponentId.slice(0, cutStringIdx);
        }
      }
    }
    return "";
  };

  useEffect(() => {
    const result = getComponentName();
    setComponentName(result);
  }, [getComponentName]);

  const codeSnippet = getCode(componentName, colorHex, subColorHex);

  const handlerCodeCopy: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (codeSnippet) {
      window.navigator.clipboard.writeText(codeSnippet);
      alert("코드 복사가 완료되었습니다.");
    } else {
      alert("복사할 코드가 없습니다.");
    }
  };

  return (
    <PlayGroundContainer>
      <PlayGroundHead>결과</PlayGroundHead>
      <PlayGroundContent>{children}</PlayGroundContent>
      <PlayGroundHead>코드</PlayGroundHead>
      <PlayGroundContent>
        <CodeSnipet>
          <ButtonWithIcon imgSrc={"i_copy.svg"} onClick={handlerCodeCopy} />
          {codeSnippet}
        </CodeSnipet>
      </PlayGroundContent>
    </PlayGroundContainer>
  );
};

export default PlayGround;
