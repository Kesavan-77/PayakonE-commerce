import React from 'react'
import { useFilterContext } from '../context/FilterContext';
import Product from './Product';

export default function ProductList() {
    const {filter_products} = useFilterContext();
  return (
    <div className='product-card'>
        {filter_products.map((currElem, id)=>{
            return <Product key={currElem.id} {...currElem} />
        })}
    </div>
  )
}
