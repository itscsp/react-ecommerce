import React, { useContext } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';
import {  IoMdClose } from "react-icons/io";
import { CartContext } from '../../contexts/CartContext';
import WishItem from './WishItem';


const WishList = () => {
  const {isWishListOpen, handleWishListbar} = useContext(SidebarContext)
  const {wish} = useContext(CartContext)

  return (
<>
{isWishListOpen &&   <div onClick={handleWishListbar} className='h-screen w-screen overlay'></div>}
  <div className={`${isWishListOpen ? 'left-0' : '-left-full'} w-full bg-white fixed top-0 h-full  md:w-[35vw] xl:max-w-[30vw] translate-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b '>
      <div onClick={handleWishListbar} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdClose className='text-2xl'/>
      </div>
      <p className='uppercase text-sm font-semibold'>Wish List Bag </p>
    </div>
    <div className='cart-item-section overflow-y-auto'>
      {wish.map(item => {
        return <WishItem  key={item.id} item={item} />;
      })}

      {wish.length < 1 && <p className='pt-3'>Your wish list is empty!</p>}
    </div>
   
  </div>
</>
  );
};

export default WishList;
