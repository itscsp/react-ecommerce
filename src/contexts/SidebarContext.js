import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();


const SidebarProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWishListOpen, setIsWishListOpen] = useState(false)

  const handleSidebar = () => {
    setIsOpen(false)
  }

  const handleWishListbar = () => {
    setIsWishListOpen(false)
  }

  return <SidebarContext.Provider value={{isOpen, setIsOpen, handleSidebar, isWishListOpen, setIsWishListOpen, handleWishListbar}}>
    {children}
  </SidebarContext.Provider>;
};

export default SidebarProvider;
