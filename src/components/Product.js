import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = (currEle)=>{
    const {id,name,image,price} = currEle;
    
    return (
        <NavLink to={`/singleproduct/${id}`} style={{ textDecoration: 'none' }}>
        <div className='p-card'>
            <img src={image} alt={name} height='200px' width='280px' />
            <p id="name">{name}</p>
            <p id="price">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(
    price,
  )}</p>
        </div>
        </NavLink>
    )
}

export default Product;
