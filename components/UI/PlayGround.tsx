import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
//components
import Grid from "@/components/Layout/Grid";
import CodeSnipet from "@/components/UI/CodeSnipet";
import ButtonWithIcon from "@/components/UI/ButtonWithIcon";
//Utils
import { getCode } from "@/util/getCode";
import { getBlock } from "@/util/getBlock";
//Contexts
import { MenuContext } from "@/contexts/MenuContext";

interface PlayGounrdProps {
  children: React.ReactNode;
  colorhex: string;
  subcolorhex: string;
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
  colorhex,
  subcolorhex,
}) => {
  const [componentName, setComponentName] = useState<string>("");
  const { menuState } = useContext(MenuContext);

  const getComponentName = () => {
    if (React.isValidElement(children)) {
      const childType = children.type as any;
      if (childType?.styledComponentId) {
        const cutStringIdx = childType.styledComponentId.indexOf("-");
        if (cutStringIdx !== 0) {
          return childType.styledComponentId.slice(0, cutStringIdx);
        }
      }
    }
    return "";
  };

  useEffect(() => {
    const result = getComponentName();
    setComponentName(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuState]);

  const codeSnippet = getCode(componentName, colorhex, subcolorhex);
  const codeBlock = getBlock(componentName, codeSnippet);
  const [showCodeBlock, setShowCodeBlock] = useState(false);

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
      <PlayGroundHead>{componentName} 결과</PlayGroundHead>
      <PlayGroundContent>{children}</PlayGroundContent>
      <PlayGroundHead>
        <Grid $column="1fr 1fr" $place="space-between">
          <Grid $column="auto 1fr" $place="center start">
            <ButtonWithIcon
              imgSrc="i_copy.svg"
              onClick={() => {
                setShowCodeBlock(false);
              }}
            />
            <div>styled-component</div>
          </Grid>
          <Grid $column="auto 1fr" $place="center start">
            <ButtonWithIcon
              imgSrc="i_copy.svg"
              onClick={() => {
                setShowCodeBlock(true);
              }}
            />
            <div>컴포넌트 사용 예시</div>
          </Grid>
        </Grid>
      </PlayGroundHead>
      <PlayGroundContent>
        <CodeSnipet>
          <ButtonWithIcon imgSrc="i_copy.svg" onClick={handlerCodeCopy} />
          {/* showCodeBlock 불린값에 따라 codeSnippet과 codeBlock 보여짐 */}
          {showCodeBlock ? codeBlock : codeSnippet}
        </CodeSnipet>
      </PlayGroundContent>
    </PlayGroundContainer>
  );
};

export default PlayGround;
