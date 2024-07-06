import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

interface EditorProps {
  value: string;
  onChange: (content: string) => void;
}

const EditorWrap = styled.div`
  width: 100%;
  background-color: #fff;
`;

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  return (
    <>
      <EditorWrap>
        <ReactQuill value={value} onChange={onChange} />
      </EditorWrap>
    </>
  );
};

export default Editor;
