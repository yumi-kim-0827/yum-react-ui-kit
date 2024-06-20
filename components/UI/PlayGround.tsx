import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Grid from "@/components/Layout/Grid";
import CodeSnipet from "@/components/UI/CodeSnipet";
import ButtonWithIcon from "@/components/UI/ButtonWithIcon";
import { getCode } from "@/util/getCode";

interface PlayGounrdProps {
  children: React.ReactNode;
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

const PlayGround: React.FC<PlayGounrdProps> = ({ children }) => {
  const [componentName, setComponentName] = useState<string>("");
  const childremStyle = children?.type?.styledComponentId;

  const getComponentName = () => {
    const cutStringIdx = childremStyle?.indexOf("style");
    if (cutStringIdx !== -1) {
      return childremStyle.slice(0, cutStringIdx);
    }
  };

  useEffect(() => {
    const result = getComponentName();
    setComponentName(result);
  }, []);

  const codeSnippet = getCode(componentName);

  const handlerCodeCopy = () => {
    window.navigator.clipboard.writeText(codeSnippet);
    alert("코드 복사가 완료되었습니다.");
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
