import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

export default function AddToCart({product}) {

    const {addToCart} = useCartContext();

    const [amount,SetAmount] = useState(1);

    const setDecrease = ()=>{
        amount>1?SetAmount(amount-1):SetAmount(1);
    }
    const setIncrease = ()=>{
        amount<product.stock?SetAmount(amount+1):SetAmount(product.stock);
    }
    if(product.stock===0) return <></>
    
  return (
    <div className='addtocart'>
        <div className='noOfItems'>
            <span onClick={setDecrease}>-</span>
            <span>{amount}</span>
            <span onClick={setIncrease}>+</span>
        </div>
        <div className='submit'>
            <NavLink to='/cart' onClick={()=> addToCart(amount,product)}>
            <button>Add To Cart</button></NavLink>
        </div>
    </div>
  )
}
