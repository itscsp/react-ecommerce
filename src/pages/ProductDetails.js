import React, {useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { convertCurrency } from '../utility/convert';
import Rating from '../components/Rating';



const ProductDetails = () => {
  const {handleSidebar, handleWishListbar} = useContext(SidebarContext)
  useEffect(() => {
    handleSidebar()
    handleWishListbar()
  },[])
  
  //Get the product id
  const {id} = useParams();
  const productId = parseInt(id) //Parse to int

  const {products} = useContext(ProductContext);
  const {addToCart, wishHandler, wish} = useContext(CartContext)
  const [wishButtonText, setWishButtonText] = useState('Add To Wish');

  
  useEffect(() => {
    let filtered = wish.filter((item) => item.id === productId)
    if(filtered.length){
      if(filtered[0].isWish){
        setWishButtonText('Remove From Wish');
      }
    } else {
      setWishButtonText('Add To Wish');
    }
  }, [wish])

  const product = products.find(item => {
    return item.id === productId;
  })

  console.log(product);
  
  const addToCartHandler = () => {
    addToCart(product, productId);
  }
  
  const wishlistHandler = () => {
    wishHandler(product, true)
  }


  if(!product) {
    return (
      <section className='h-screen flex justify-center'>
        Loading...
      </section>
    )
  }

const {title, price, description, image, rating} = product
    
  return (
    <section className='pt-6 pb-12 lg:py-32 h-screen- flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' src={image} alt={title} />
          </div>

          <div className='flex-1 text-center lg:text-left '>
            <h1 className='text-[22px] md:text-[26px] font-medium mb-2'>{title}</h1>
            <div className='flex justify-between align-middle my-4'>
              <p className='text-xl'>{convertCurrency(price)}</p> 
              <Rating rate={rating.rate}/>
            </div>
            <p>{description}</p>
            <div className='flex align-middle mt-4 gap-1'>
              <button onClick={addToCartHandler} className='flex-1 text-center bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'>Add To Cart</button>
              <button onClick={wishlistHandler} className='flex-1 text-center bg-red-500 text-white py-2 px-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300'>{wishButtonText}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProductDetails;
