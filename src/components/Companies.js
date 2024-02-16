import React from 'react'
import Container from '@mui/material/Container'
import Company1 from '../images/company1.png';
import Company2 from '../images/company2.png';
import Company3 from '../images/company3.png';
import Company4 from '../images/company4.png';

export default function companies() {
  return (
    <div className='companies'>
      <Container>
    <p>Trusted by top companies</p>
    <div className="companies-cont">
    
        <div className='comp1'>
            <img src={Company1} alt='c1'/>
        </div>
        <div className='comp2'>
            <img src={Company2} alt='c1'/>
        </div>
        <div className='comp3'>
            <img src={Company3} alt='c1'/>
        </div>
        <div className='comp4'>
            <img src={Company4} alt='c1'/>
        </div>
      </div>
      </Container>
    </div>
  )
}
