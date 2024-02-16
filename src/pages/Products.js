import React from 'react';
import Container from '@mui/material/Container';
import ProductList from '../components/ProductList';
import FilterSection from '../components/FilterSection';
import '../styles/Products.css';

export default function Products() {
  return (
    <div className='productsPage'>
      <Container>
        <div className='product-section'>
          <div className="filter-section">
            <FilterSection />
          </div>
          <div className='products-list'>
            <ProductList />
          </div>
        </div>
      </Container>
    </div>
  )
}
