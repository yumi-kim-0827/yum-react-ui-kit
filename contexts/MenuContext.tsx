import React, { createContext, useState } from "react";

interface MenuProviderProps {
  children: React.ReactNode;
}

interface MenuContextType {
  menuState: string;
  handleMenu: (path: string) => void;
}

const initialMenuState = "button";
//Context 생성
export const MenuContext = createContext<MenuContextType>({
  menuState: initialMenuState,
  handleMenu: () => {},
});

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  //사용자가 선택한 메뉴 상태 관리
  const [menuState, setMenuState] = useState(initialMenuState);
  const handleMenu = (path: string) => {
    setMenuState(path);
  };
  return (
    <MenuContext.Provider value={{ menuState, handleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
