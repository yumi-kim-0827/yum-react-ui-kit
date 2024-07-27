import React, { useContext } from "react";
import { MenuContext } from "@/contexts/MenuContext";

import styled from "styled-components";

const SideNavWrap = styled.div`
  position: sticky;
  top: 0;
  padding: 20px;
  width: 100%;
  color: #fff;
  font-weight: bold;
  overflow: hidden;
`;

const SideNavList = styled.nav`
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(34, 26, 31, 0.8);
`;

const SideNavItems = styled.ul``;

const SideNavItem = styled.li`
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const SideNav = () => {
  const { handleMenu } = useContext(MenuContext);

  // 사이드바 메뉴 리스트
  const menuItems = [
    { text: "alert", path: "alert" },
    { text: "badge", path: "badge" },
    { text: "breadcrumbs", path: "breadcrumbs" },
    { text: "button", path: "button" },
    { text: "inform", path: "inform" },
    { text: "table", path: "table" },
    { text: "listgroup", path: "listgroup" },
    { text: "tab", path: "tab" },
    { text: "card", path: "card" },
  ];

  return (
    <SideNavWrap>
      <SideNavList>
        <SideNavItems>
          {menuItems.map((item) => {
            return (
              <SideNavItem
                key={item.text}
                onClick={() => {
                  handleMenu(item.text);
                }}
              >
                {item.text}
              </SideNavItem>
            );
          })}
        </SideNavItems>
      </SideNavList>
    </SideNavWrap>
  );
};

export default SideNav;
