import React, { useContext, useEffect, useRef } from 'react';
import { UserContext } from '../contexts/UserContext';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';


const OrderStatus = () => {
  const { shippingInfo, shippingInfoReady } = useContext(UserContext);
const {cart, setCart, totalAmount} = useContext(CartContext)

        const navigate = useNavigate()

      
      useEffect(() => {
   
        if(cart.length < 1) {
          navigate('/');
        }
      },[])


  const orderDetails = {
    orderId: "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    orderDate: new Date().toLocaleDateString(),
    status: "Confirmed",
  };

    // Inside your component:
    // const navigate = useNavigate();

    const clearCart = () => {
        setCart([]);
    };



    const hasClearedCart = useRef(false);

    useEffect(() => {
        return () => {
            if (!hasClearedCart.current) {
                clearCart();
                hasClearedCart.current = true;
            }
        };
    }, []);
    


  if (!shippingInfoReady) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Please complete your shipping information first
        </h2>
      </div>
    );
  }

  

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Order Confirmation Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <IoMdCheckmarkCircleOutline className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Order Successfully Placed!</h1>
        <p className="text-gray-600">
          Thank you for your order. We'll send you a confirmation email to {shippingInfo.email}
        </p>
      </div>

      {/* Order Details Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Order Details</h2>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            {orderDetails.status}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-600">Order Number</p>
            <p className="font-medium">{orderDetails.orderId}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Order Date</p>
            <p className="font-medium">{orderDetails.orderDate}</p>
          </div>
        </div>

        {/* Customer Information */}
        <div className="border-t pt-4 mb-6">
          <h3 className="font-semibold mb-3">Customer Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="font-medium">{shippingInfo.firstname} {shippingInfo.lastname}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium">{shippingInfo.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-medium">{shippingInfo.phone}</p>
            </div>
          </div>
        </div>

        {/* Shipping Details */}
        <div className="border-t pt-4 mb-6">
          <h3 className="font-semibold mb-3">Shipping Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Address</p>
              <p className="font-medium">{shippingInfo.street1}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">City</p>
              <p className="font-medium">{shippingInfo.city}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Postal Code</p>
              <p className="font-medium">{shippingInfo['postal-code']}</p>
            </div>
          </div>
        </div>

      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4">
        <Link to={'/'} className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Back to Products
        </Link>
       
      </div>
    </div>
  );
};

export default OrderStatus;