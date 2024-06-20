import React from "react";
import styled from "styled-components";
import Grid from "@/components/Layout/Grid";
import LinkIcon from "@/components/UI/LinkIcon";

const FootContainer = styled.footer`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const Footer = () => {
  return (
    <FootContainer>
      <Grid column={"1fr auto"}>
        <span>Copyright© 2024 KIM YUMEE</span>
        <LinkIcon
          href={"https://github.com/yumi-kim-0827"}
          imgSrc={"i_github.svg"}
        />
      </Grid>
    </FootContainer>
  );
};

export default Footer;
