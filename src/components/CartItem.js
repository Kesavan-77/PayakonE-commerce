import React, { useState, useEffect } from 'react';
import { useCartContext } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import CartAmountToggle from '../components/CartAmountToggle';

export default function CartItem({ id, name, image, company, price, amount, stock }) {
  const [quantity, setQuantity] = useState(amount);
  const [totalNetAmount, setTotalNetAmount] = useState(quantity * price);

  const { removeItem, setDecrease, setIncrement } = useCartContext();

  useEffect(() => {
    // Update total net amount whenever quantity changes
    setTotalNetAmount(quantity * price);
  }, [quantity, price]);

  const handleDecrease = () => {
    setDecrease(id);
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0)<=1?1:Math.max(prevQuantity - 1, 0));
  };

  const handleIncrease = () => {
    setIncrement(id);
    setQuantity((prevQuantity) => prevQuantity + 1 >= stock ? stock : prevQuantity + 1);
  };

  return (
    <div className='cart-item'>
      <div className='cart-img'>
        <img src={image} alt='product' height='120px' width='170px' />
        <div className='quantity'>
          <CartAmountToggle
            amount={quantity}
            setDecrease={handleDecrease}
            setIncrease={handleIncrease}
          />
        </div>
      </div>
      <div className='cart-details'>
        <h4>{name}</h4>
        <p>{company}</p>
        <h3>
          {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(
            price
          )}
        </h3>
        <NavLink to='/error'>
          <button id='buyNow'>Buy Now</button>
        </NavLink>
        <button onClick={() => removeItem(id)} id='remove'>
          Remove
        </button>
      </div>
      <div className='cart-total'>
        <table>
          <tbody>
            <tr>
              <th>Total Count of Items:</th>
              <td>
                <p>{quantity}</p>
              </td>
            </tr>
            <tr>
              <th>Shipping cost:</th>
              <td>
                <p>Free</p>
              </td>
            </tr>
            <tr>
              <th>Total net amount:</th>
              <td>
                <p>
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(
                    totalNetAmount
                  )}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
