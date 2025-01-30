import React, { useContext } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';
import { IoMdClose } from "react-icons/io";
import { CartContext } from '../../contexts/CartContext';
import { convertCurrency } from '../../utility/convert';
import { FiTrash2 } from "react-icons/fi";
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const CartList = () => {
  const {isOpen, handleSidebar} = useContext(SidebarContext)
  const {cart, clearCart, itemAmount, totalAmount} = useContext(CartContext)

  return (
<>
  {isOpen &&   <div  onClick={handleSidebar}  className='h-screen w-screen overlay'></div>}
  <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full  md:w-[35vw] xl:max-w-[30vw] translate-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b '>
      <p className='uppercase text-sm font-semibold'>Shoping Bag ({itemAmount})</p>
      <div onClick={handleSidebar} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdClose className='text-2xl'/>
      </div>
    </div>
    <div className='cart-item-section overflow-y-auto'>
      {cart.map(item => {
        return <CartItem  key={item.id} item={item} />;
      })}
      {cart.length < 1 && <p className='pt-3'>Your cart is empty!</p>}

    </div>
    <div className='flex justify-between items-center  mt-2'>
      <div className='uppercase font-semibold'>
        <span>Total: </span> {convertCurrency(totalAmount)}
      </div>
      <div onClick={clearCart} className='cursor-pointer bg-red-500 p-3 w-12 flex justify-center items-center text-white text-xl'>
        <FiTrash2 />
      </div>
    </div>
    <div className='flex py-2'>
    {cart.length > 0 && <Link to={'/place-order'} className='flex-1 text-center bg-red-500 text-white py-4 px-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300'>Place Order</Link>}
    </div>
  </div>
</>
  );
};

export default CartList;
