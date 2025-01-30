import React, { createContext, useEffect, useState } from 'react';

//create context
export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);

  const [itemAmount, setItemAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(() => {
    setItemAmount(cart.length)
    const netAmount = cart.reduce((acc, curr) => {return acc + curr.price * curr.amount}, 0)
    setTotalAmount(netAmount);
  }, [cart])

  const addToCart = (data, id) => {
    
    const newItem = {...data, amount: 1};
    console.log(newItem)

      // Check is item already in the cart
      const cartItem = cart.find((item) => {
        return item.id === id
      })

      //If so
      if(cartItem) {
        const newCart = [...cart].map(item => {
          if(item.id === id){
            return {...item, amount: cartItem.amount + 1}
          } else {
            return item;
          }
        })
        setCart(newCart)
      } else {
        setCart([...cart, newItem]) 
      }

    }

  const wishHandler = (data, condition) => {
    let newItem = {...data, isWish: condition}

    // Check is item already in the cart
    const wishItem = wish.find((item) => {
      return item.id === newItem.id
    })

    if(!wishItem){
      setWish([...wish, newItem])
    } else{
      let filtered = wish.filter(item => {
        return item.id !== newItem.id
      })

      setWish(filtered)

    }


  }

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
  }

  const clearCart = () => {
    setCart([]);
  }

  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id)
    addToCart(item, id);
  }

  const decreseAmount = (id) => {
      const cartItem = cart.find((item) => {
        return item.id === id
      })

    
      if(cartItem) {
        const newCart = [...cart].map(item => {
          if(item.id === id){
            
              return {...item, amount: cartItem.amount - 1}
            
          } else {
            return item;
          }
        })
        setCart(newCart)
      }

      if(cartItem.amount < 2){
        removeFromCart(id);
      } 

  }
  
  return <CartContext.Provider value={{cart, setCart, wish, addToCart, removeFromCart, clearCart, increaseAmount, decreseAmount, itemAmount, totalAmount, wishHandler}}>{children}</CartContext.Provider>;
};

export default CartProvider;
