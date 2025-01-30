import React from 'react';
// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'
//components

import Header from './components/Header'
import Footer from './components/Footer'
import PlaceOrder from './pages/PlaceOrder';
import CartList from './components/Cart/CartList';
import WishList from './components/Wish/WishList';
import OrderStatus from './pages/OrderStatus';


const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header/>
      <CartList />
      <WishList />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/order-status' element={<OrderStatus />} />

      </Routes>
      <Footer />
    </Router>
    </div>;
};

export default App;
