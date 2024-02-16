import React from 'react';
import { useProductContext } from '../context/ProductContext';
import Product from './Product';
import Container from '@mui/material/Container';

export default function FeatureProducts() {
    const { isLoading, featureProducts } = useProductContext();

    if (isLoading) return <div>....Loading</div>;

    if (!featureProducts || featureProducts.length === 0) {
        return <div>No feature products available</div>;
    }

    return (
        <div className='f-product'>
            <Container>
            <div className='f-body'>
                <div className='title'>
                    <p>Coming soon!</p>
                </div>
                <div className='sub-title'>
                <p>Our Feature Products</p>
                </div>
                <div className='container'>
                {featureProducts && featureProducts.map((currEle) => (
                <Product key={currEle.id} {...currEle} />
))}
                </div>
            </div>
            </Container>
        </div>
    );
}
