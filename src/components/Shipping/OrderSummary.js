import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { convertCurrency } from "../../utility/convert";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const { cart, totalAmount } = useContext(CartContext);
  const { shippingInfoReady } = useContext(UserContext);


  return (
    <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div>
          <h3 className="text-xl font-medium">Order Details:</h3>
          {/* Here, you would typically map through cart items */}
          <ul className="space-y-2 mb-4">
            {cart.map((item) => {
              return (
                <li key={item.id} className="flex justify-between ">
                  <span className="text-[12px]">{item.title} :</span>{" "}
                  <span>
                    {" "}
                    {item.amount} * {convertCurrency(item.price)}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="font-semibold text-lg">
            Total: <span>{convertCurrency(totalAmount)}</span>
          </p>
        </div>

        {/* Cash On Delivery Option */}
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Payment Method</h3>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="cod"
              name="payment-method"
              value="cod"
              checked
              className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="cod" className="text-lg text-gray-700">
              Cash On Delivery (COD)
            </label>
          </div>
        </div>

        {/* Proceed to Payment Button */}
        {shippingInfoReady &&
        <Link disabled={!shippingInfoReady}
          className={`block mt-6 w-full py-3 bg-blue-600 text-white text-lg font-semibold text-center rounded-md hover:bg-blue-700 transition `}
          to={'/order-status'}
        >
          Place Order
        </Link>}

        {!shippingInfoReady &&
        <button disabled={!shippingInfoReady}
          className={`block mt-6 w-full py-3 bg-blue-600 text-white text-lg font-semibold text-center rounded-md hover:bg-blue-700 transition cursor-not-allowed opacity-50`}
          to={'/order-status'}
        >
          Place Order
        </button>}


      </div>
    </div>
  );
};

export default OrderSummary;
