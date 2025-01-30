import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext'; // Import the custom hook
import LoginForm from '../components/Shipping/LoginForm';
import GuestCheckout from '../components/Shipping/GuestCheckout';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import OrderSummary from '../components/Shipping/OrderSummary';
import BillingDetails from '../components/Shipping/BillingDetails';

const PlaceOrder = () => {
      const {handleSidebar, handleWishListbar} = useContext(SidebarContext)
        const {cart, totalAmount} = useContext(CartContext)
        const {isLoggedIn} = useContext(UserContext)

      
      useEffect(() => {
        handleSidebar()
        handleWishListbar()
      },[])
      

  const [showLogin, setShowLogin] = useState(false); // State for active tab

  const loginHandler = () => {
    setShowLogin(!showLogin)
  }



  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Checkout Process
        </h2>

        {cart.length ? (

        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left side: Tabs */}
          <div className="flex flex-1 justify-start items-center mb-8 lg:mb-0">
            <div className='w-full flex flex-col gap-2'>
              {!isLoggedIn && <div> <p className='text-start'>Returning customer? <button className='text-blue-500' onClick={loginHandler}>Click here to login</button></p></div>}

              {showLogin && <LoginForm /> }

              <BillingDetails />
            </div>
          
          </div>

          <OrderSummary />
        </div>
        ) : (
          <div> <p className='text-center'>Your Cart Is Empty! <Link className='text-blue-500' to="/">Add Products To Cart</Link></p></div>
        )
        }
      </div>
    </section>
  );
};

export default PlaceOrder;
