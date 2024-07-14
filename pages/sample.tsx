import React from "react";
//Components
import Layout from "@/components/Layout/Layout";
import Grid from "@/components/Layout/Grid";

import styled from "styled-components";

export const BaseTextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 100px;
  border: 1px solid #561ecb;
  &:focus {
    border-bottom: 3px solid #561ecb;
  }
  resize: none;
`;

const Sample = () => {
  return (
    <Layout>
      <Grid $column={"1fr"} $place={"center"}>
        <BaseTextArea>ss</BaseTextArea>
      </Grid>
    </Layout>
  );
};

export default Sample;
