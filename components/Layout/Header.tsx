import React from "react";
import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.header`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const HeaderWrap = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`;
const MenuNav = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    li {
      a {
        color: #000;
        font-size: 20px;
      }
    }
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <MenuNav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/showcase">Showcase</Link>
            </li>
          </ul>
        </MenuNav>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
