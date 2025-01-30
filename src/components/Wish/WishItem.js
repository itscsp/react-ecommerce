import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';


const WishItem = ({item}) => {
  const {id, title,image, price, amount  } = item
  const {wishHandler}  = useContext(CartContext)
  const wishlistHandler = () => {
    wishHandler(item, false) 
  }

  return (
    <div className='flex  gap-x-4 py-2 lg:px-6 border-b border-gray-300'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>

        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]'  src={image} />
        </Link>
        <div className='w-full flex flex-col'>
            <div className='flex justify-between mb-2'>
              <h3 className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</h3>
            </div>
            <div className='flex align-middle mt-4 gap-1'>
                      <button onClick={wishlistHandler} className='flex-1 text-center border border-red-500 text-black py-2 px-2 rounded hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300'>Remove</button>
                      <Link className='flex-1 text-center bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300' to={`./product/${id}`}>View</Link>
                    </div>
        </div>

      </div>
    </div>);
};

export default WishItem;
