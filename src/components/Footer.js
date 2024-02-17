import React from 'react';
import FacebookIcon from '../images/facebook.png';
import LinkedInIcon from '../images/linkedin.png';
import InstagramIcon from '../images/instagram.png'

export default function Footer() {
  return (
    <div className='footer-container'>
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-sec1'>
                <ul>
                    <h3>Get to know us</h3>
                    <li>About Us</li>
                    <li>Carrers</li>
                    <li>Press Release</li>
                    <li>Payakon Release</li>
                </ul>
            </div>
            <div className='footer-sec2'>
                <ul>
                    <h3>Connect with Us</h3>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div className='footer-sec3'>
                <ul>
                    <h3>Make money with us</h3>
                    <li>Sell on payakon</li>
                    <li>Protect and build your brand</li>
                    <li>Advertise your products</li>
                    <li>Payakon global selling</li>
                    <li>Payakon pay on merchants</li>
                </ul>
            </div>
            <div className='footer-sec4'>
                <ul>
                    <h3>Let us help you</h3>
                    <li>Your account</li>
                    <li>Returns Centre</li>
                    <li>100% purchase protection</li>
                    <li>Payakon App Download</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
        <hr></hr>
        <div className='footer-bottom'>
            <div className='social-media'>
                <h3>Follow Us</h3><br />
                <div className='social-icons'>
                    <img src={FacebookIcon} alt='fb' height='30px' width='30px'/>
                    <img src={InstagramIcon} alt='insta' height='30px' width='30px' />
                    <img src={LinkedInIcon} alt='linkedin' height='30px' width='30px' />
                </div>
            </div>
            <div className='copyrights'>
                <p>@2024 payakonStore.All right reserved</p>
            </div>
            <div className='policy'>
                <p>PRIVACY POLICY</p>
                <p>TERMS AND CONDITION</p>
            </div>
        </div>
    </div>
    </div>
  )
}
