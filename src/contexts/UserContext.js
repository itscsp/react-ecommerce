import React, { createContext, useState, useCallback, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [shippingInfoReady, setShippingInfoReady] = useState(false)
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
  });
  const [shippingInfo, setShippingInfo] = useState({
    name: {firstname:'', lastname: ''},
    address: {
      city: '',
      street1: '',
      street2: '',
      postalcode: '',
    }
  });

  const contextValue = {
    isLoggedIn,
    shippingInfoReady,
    shippingInfo,
    userInfo,
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;