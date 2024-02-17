import React from 'react';
import Container from '@mui/material/Container';
import HeadImage from '../images/hero.jpg';
import '../styles/About.css';

export default function Home() {
  return (
    <>
    <Container>
    <div className='about'>
      <div className='header'>
        <div className='head-image'>
          <img src={HeadImage} alt='head' />
        </div>
        <div className='head-cont'>
          <p>Welcome To</p>
          <h2>Payakon E-Commerce</h2>
          <p>Discover endless possibilities at Payakon. Elevate your shopping experience with curated collections, exclusive deals, and seamless navigation. Shop confidently for quality products that suit your lifestyle. Welcome to a world of convenience and style – your one-stop destination for all things extraordinary.</p>
        </div>
      </div>
      <div className='about-body'>
        <div className='vision'>
          <div className='left-part1'>
            <h4>Our</h4>
            <h1>Vision</h1>
          </div>
          <div className='left-part2'>
            <p>To revolutionize the global marketplace by seamlessly connecting people, businesses, and products through innovative digital solutions. Our vision is to be the preferred e-commerce platform, empowering individuals and businesses to thrive in a borderless and inclusive online ecosystem.</p>
          </div>
        </div>
        <div className='mission'>
        <div className='rifgt-part1'>
        <h4>Our</h4>
        <h1>Mission</h1>
        </div>
        <div className='right-part2'>
          <p>Our mission is to redefine the e-commerce landscape by consistently delivering exceptional value to customers and partners. We are committed to cultivating a diverse and sustainable ecosystem, promoting ethical business practices, and ensuring the highest standards of security and privacy. Through continuous improvement and adaptation, we aim to simplify transactions, enhance user satisfaction, and contribute to the digital evolution of commerce on a global scale.</p>
        </div>
        </div>
      </div>
    </div>
    </Container>
    </>
  )
}
