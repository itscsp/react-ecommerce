import React, { useContext } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { convertCurrency } from '../../utility/convert';
import { CartContext } from '../../contexts/CartContext'; 
const CartItem = ({item}) => {
  const {id, title,image, price, amount  } = item
  const {removeFromCart, increaseAmount ,decreseAmount}  = useContext(CartContext)

  return (
    <div className='flex  gap-x-4 py-2 lg:px-6 border-b border-gray-300'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>

        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]'  src={image} />
        </Link>
        <div className='w-full flex flex-col'>

            <div className='flex justify-between mb-2'>
              <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>
              {/* Remove Item */}
              <div onClick={() => removeFromCart(id)}>
                <IoMdClose className='text-gray-400 hover:text-red-600 transition cursor-pointer' />
              </div>
            </div>

            <div className='flex gap-2 justify-between mt-3 flex-wrap md:flex-nowrap'>

              <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
                <div onClick={() => decreseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdRemove />
                </div>
                <div className='h-full flex justify-center items-center px-2'>{amount}</div>
                <div  onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
               <IoMdAdd />
                </div>
              </div>
              <div>{convertCurrency(price)}</div>
              <div>{`${convertCurrency(item.price * amount)}`}</div>
            </div>

        </div>

      </div>
    </div>);
};

export default CartItem;
