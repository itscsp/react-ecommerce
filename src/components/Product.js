import React, { useContext, useEffect, useState } from 'react';
import { GoHeartFill, GoHeart } from "react-icons/go";
import { convertCurrency } from '../utility/convert';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import { stringTrim } from '../utility/stringTrim';
import  { CartContext } from '../contexts/CartContext';

const Product = ({data}) => {
  const {title,image, price, rating,id  } = data
  const {addToCart, wishHandler, wish} = useContext(CartContext)
  const [isWish, setIsWish] = useState(false) 

  useEffect(() => {
    let filtered = wish.filter((item) => item.id === id)
    if(filtered.length){
      if(filtered[0].isWish){
        setIsWish(true)
      }
    } else {
      setIsWish(false)
    }
  }, [wish])

  const wishlistHandler = () => {
    wishHandler(data, true)
  }

  const addToCartHandler = () => {
    addToCart(data, id);
  }
  
  return (
    <div className='border border-gray-400 pb-2 pt-2 px-2'>
      <div className='relative p-3'>
        <button onClick={wishlistHandler} className='absolute right-0 top-0 pointer'>
          {!isWish ? <GoHeart size={40} color="red" /> : <GoHeartFill size={40} color="red"/> }
        </button>
        <img className=' min-h-[200px] max-h-[200px] object-contain mx-auto' src={image} alt={title} />
      </div>
      <div >
        <h3 className='min-h-14 text-lg'>{stringTrim(title)}</h3>
        <div className='flex justify-between align-middle my-4'>
        <p>{convertCurrency(price)}</p> 
        <Rating rate={rating.rate}/>
        </div>

        <div className='flex align-middle mt-4 gap-1'>
          <button onClick={addToCartHandler} className='flex-1 text-center bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'>Add To Cart</button>
          <Link className='flex-1 text-center bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300' to={`./product/${id}`}>View</Link>
        </div>

      </div>

    </div>
    );
};

export default Product;
