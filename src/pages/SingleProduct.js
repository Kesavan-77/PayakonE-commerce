import React,{useEffect} from 'react';
import '../styles/SingleProduct.css';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import ProductItems from '../context/products.json';
import { useProductContext } from '../context/ProductContext';
import Service from '../components/Service';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';
import AddToCart from '../components/AddToCart';

export default function SingleProduct() {
  const {getSingleProduct, isSingleLoading, singleProduct} = useProductContext();
  const {id} = useParams();

  const {id:alias,name,image,company,price,description,category,stock,reviews} = singleProduct;
  console.log(alias)

  useEffect(() => {const selectedProduct = ProductItems.find(product => product.id === id);
    if (selectedProduct) {getSingleProduct(selectedProduct);
    }else {console.error(`Product with ID ${id} not found.`);
    }
  }, []);


  if(!isSingleLoading) return <div>Loading...</div>

  return (
    <Container >
      <div className='singleProduct'>
        <div className='container'>
          <div class='sp-head'>
            <NavLink to='/products'>
            <ArrowBackIcon sx={{height:"35px",width:"35px",color:"black"}}/></NavLink>
            <span id="head">Product \ </span>
            <span id='name'>{name}</span>
          </div>
          <div className='sp-body'>
            <div className="product-img">
              <img src={image} alt='product' height="300px" width="400px" />
              <AddToCart product={singleProduct}/>
            </div>
            <div className='product-details'>
              <div className='pd-head'>
                <h3>{name}</h3>
                <h6>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(
    price,
  )}</h6>
                <p>{reviews?`Rating ${reviews}`:'Not available '}<span>&#9733;</span>
</p>
              </div>
              <div className='pd-body'>
                <table>
                  <tr>
                    <th valign="top">Name:</th>
                    <td valign="top">{name}</td>
                  </tr>
                  <tr>
                    <th valign="top">Category: </th>
                    <td valign="top">{category}</td>
                  </tr>
                  <tr>
                    <th valign="top">Company:</th>
                    <td valign="top">{company}</td>
                  </tr>
                  <tr>
                    <th valign="top">Description: </th>
                    <td valign="top">{description}</td>
                  </tr>
                  <tr>
                    <th valign="top">Stock:</th>
                    <td valign="top">{stock?'Available':"Not Available"}</td>
                  </tr>
                </table>
              </div>
            </div>
            <Service />
          </div>
        </div>
      </div>
    </Container>
  )
}
