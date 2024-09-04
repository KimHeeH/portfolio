// MenuContext.js
import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();
export const useMenu = () => useContext(MenuContext);
export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu((prev) => !prev);
  return (
    <MenuContext.Provider value={{ menu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
