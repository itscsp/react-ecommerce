import React, { createContext, useState, useCallback } from 'react';
import { validationRules } from '../utility/validation';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [shippingInfoReady, setShippingInfoReady] = useState(false);
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

  // Handle login form input changes
  const handleLoginChange = useCallback((e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
    setLoginError('');
  }, []);

  // Login submission handler
  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    try {
      const response = await fetch('https://fakestoreapi.com/users');
      const users = await response.json();

      // Find user by username/email and password
      const user = users.find(u => 
        (u.username === userInfo.username || u.email === userInfo.username) && 
        u.password === userInfo.password
      );

      if (user) {
        setIsLoggedIn(true);
        // Pre-fill shipping info with user data
        setShippingInfo(prev => ({
          ...prev,
          firstname: user.name.firstname,
          lastname: user.name.lastname,
          email: user.email,
          phone: user.phone,
          street1: user.address.street,
          city: user.address.city,
          'postal-code': user.address.zipcode,
        }));
        // Clear login error if any
        setLoginError('');
      } else {
        setLoginError('Invalid username or password');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [userInfo]);

  // Existing validation functions
  const validateField = useCallback((name, value) => {
    const validationRule = validationRules[name];
    return validationRule ? validationRule(value) : '';
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    Object.keys(shippingInfo).forEach((field) => {
      const error = validateField(field, shippingInfo[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [shippingInfo, validateField]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [touched, validateField]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, shippingInfo[name]);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [shippingInfo, validateField]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setTouched(Object.keys(shippingInfo).reduce((acc, field) => ({ ...acc, [field]: true }), {}));
    
    const isValid = validateForm();
    if (isValid) {
      setShippingInfoReady(true);
    }
  }, [shippingInfo, validateForm]);

  // Logout handler
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setUserInfo({ username: '', password: '' });
    setShippingInfo({
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      street1: '',
      city: '',
      'postal-code': '',
    });
    setShippingInfoReady(false);
  }, []);

  const contextValue = {
    isLoggedIn,
    isLoading,
    loginError,
    shippingInfo,
    userInfo,
    errors,
    touched,
    shippingInfoReady,
    handleChange,
    handleBlur,
    handleSubmit,
    handleLogin,
    handleLoginChange,
    handleLogout,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;