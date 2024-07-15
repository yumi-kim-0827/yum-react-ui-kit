import React, { useMemo, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
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
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ size: ["small", false, "large", "huge"] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
        ],
      },
    };
  }, []);

  return (
    <>
      <EditorWrap>
        <ReactQuill value={value} modules={modules} onChange={onChange} />
      </EditorWrap>
    </>
  );
};

export default Editor;
