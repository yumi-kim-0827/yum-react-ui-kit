import React from "react";
import styled from "styled-components";
import LinkIcon from "@/components/UI/LinkIcon";

const FooterWrap = styled.footer`
  position: relative;
  margin-top: auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.9);
  @media ${({ theme }) => theme.device.small} {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <span>Copyright© 2024 KIM YUMEE</span>
      <LinkIcon
        href={"https://github.com/yumi-kim-0827"}
        imgSrc={"i_github.svg"}
      />
    </FooterWrap>
  );
};

export default Footer;
