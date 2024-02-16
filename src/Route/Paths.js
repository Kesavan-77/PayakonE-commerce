import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import About from '../pages/About';
import Cart from '../pages/Cart';
import SingleProduct from '../pages/SingleProduct';
import Contact from '../pages/Contact';
import Error from '../pages/Error'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Paths() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  )
};
