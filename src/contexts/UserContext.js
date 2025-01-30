import React, { createContext, useState, useCallback, useEffect } from 'react';
import {validationRules} from '../utility/validation'
export const UserContext = createContext();




const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [shippingInfoReady, setShippingInfoReady] = useState(false)
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });
  const [shippingInfo, setShippingInfo] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    street1: '',
    city: '',
    'postal-code': '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

    // Validate a single field
    const validateField = useCallback((name, value) => {
      const validationRule = validationRules[name];
      return validationRule ? validationRule(value) : '';
    }, []);

      // Validate all fields
  const validateForm = useCallback(() => {
    const newErrors = {};
    Object.keys(shippingInfo).forEach((field) => {
      const error = validateField(field, shippingInfo[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [shippingInfo, validateField]);

    // Handle input change
    const handleChange = useCallback((e) => {
      const { name, value } = e.target;
      setShippingInfo(prev => ({ ...prev, [name]: value }));
      
      // Validate field on change if it's been touched
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    }, [touched, validateField]);


     // Handle input blur
  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, shippingInfo[name]);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [shippingInfo, validateField]);

  // Submit handler
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setTouched(Object.keys(shippingInfo).reduce((acc, field) => ({ ...acc, [field]: true }), {}));
    
    const isValid = validateForm();
    console.log(isValid)
    if (isValid) {
      setShippingInfoReady(true);
      // Additional submit logic here
    }
  }, [shippingInfo, validateForm]);
  
  const contextValue = {
    isLoggedIn,
    shippingInfo,
    userInfo,
    errors,
    touched,
    shippingInfoReady,
    handleChange,
    handleBlur,
    handleSubmit,
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;