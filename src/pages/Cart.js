import React from 'react'
import { useCartContext } from '../context/CartContext';
import Container from '@mui/material/Container';
import CartItem from '../components/CartItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../styles/Cart.css';
import { NavLink } from 'react-router-dom';

export default function Cart() {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  

  if(cart.length === 0){return (
    <div className='cart'>
      <Container>
      <div class='sp-head'>
            <NavLink to='/products'>
            <ArrowBackIcon sx={{height:"30px",width:"30px",color:"black"}}/></NavLink>
            <span id="head">Back to Products</span>
        </div>
        <div className='no-product'>
        <img src="https://blogzine.webestica.com/assets/images/icon/empty-cart.svg" alt="emptycart" />
        <p>Cart is empty</p>
        </div>
      </Container>
    </div>
  )}

  return (
    <div className='cart'>
      <Container>
      <div class='sp-head'>
            <NavLink to='/products'>
            <ArrowBackIcon sx={{height:"30px",width:"30px",color:"black"}}/></NavLink>
            <span id="head">Back to Products</span>
        </div>
        <div class="cart-body">
        <div className='cart-section'>
          {cart.map((currEle)=>{
            return <CartItem key={currEle.id} {...currEle} />
          })}
        </div>
        <div className='bill-section'>
          <table>
            <tr>
              <th>
                Subtotal:
              </th>
              <td>
              {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 }).format(
    total_amount,
  )}
              </td>
            </tr>
            <tr>
              <th>
                Shipping Fee:
              </th>
              <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 }).format(
    shipping_fee,
  )}
              </td>
            </tr>
            <hr/>
            <tr>
              <th>
                Order Total:
              </th>
              <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 }).format(
    total_amount + shipping_fee,
  )}
              </td>
            </tr>
          </table>
          <button id="clear-cart" onClick={clearCart}>Clear cart</button>
          <NavLink to="/error"><button id="buy-now">Buy Now</button></NavLink>
        </div>
        
        </div>
      </Container>
    </div>
  )
}
