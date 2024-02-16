import React from 'react';
import Container from '@mui/material/Container';
import '../styles/Home.css'
import Service from '../components/Service'
import Companies from '../components/Companies';
import FeatureProducts from '../components/FeatureProducts';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <div className='home'>
    <Container>
      <div className='header'>
        <div className='head-image'>
          <img src="https://images.unsplash.com/photo-1541703483865-8a7b251a58ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='head'/>
        </div>
        <div className='head-cont'>
          <p>Welcome To</p>
          <h2>Payakon Store</h2>
          <p>Discover endless possibilities at Payakan. Elevate your shopping experience with curated collections, exclusive deals, and seamless navigation. Shop confidently for quality products that suit your lifestyle. Welcome to a world of convenience and style – your one-stop destination for all things extraordinary.</p>
          <NavLink to='/products'><button>Shop now</button></NavLink>
        </div>
      </div>
      </Container>
      <FeatureProducts />
      <Service />
      <Companies /><br></br>
    </div>
    </>
  )
}
