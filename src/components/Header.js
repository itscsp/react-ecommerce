import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { HiMiniShoppingBag } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { GoHeartFill } from 'react-icons/go';
import { CartContext } from '../contexts/CartContext';

const Header = () => {
    const {isOpen,setIsOpen, isWishListOpen, setIsWishListOpen} = useContext(SidebarContext);
      const {itemAmount, wish} = useContext(CartContext)
    const [isActive, setIsActive] = useState(false)

    useEffect(()=> {
      window.addEventListener('scroll', () => {
        window.scrollY > 30 ? setIsActive(true) : setIsActive(false)
      })
    },[])
  
  return(
    <header className={`${isActive ? 'fixed top-0 bg-white' : ''}  w-full z-10 transition-all ease-out duration-500 header`}>
      <div className='container mx-auto py-4 flex justify-between items-center'>
        <div className={`cursor-pointer heart-icon ${wish.length ? 'active': ''}`}  onClick={() => setIsWishListOpen(!isWishListOpen)}>
          <GoHeartFill size={42} color="red" />
        </div>
        <Link to={'/'} className='text-4xl font-medium'>
          E Shop
        </Link>
        <div className='cursor-pointer relative' onClick={() => setIsOpen(!isOpen)}>
          <HiMiniShoppingBag size={42} />
          {itemAmount ? (
            <span className='bg-red-500 absolute -right-2 top-0 text-[12px] w-[18px] h-[18px] rounded-full text-center text-white'>
              {itemAmount}
            </span>
          ) : null}
        </div>
    </div>
  </header>
  
  ) 
};

export default Header;
