import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneDisabledSharpIcon from '@mui/icons-material/PhoneDisabledSharp';
import FindReplaceSharpIcon from '@mui/icons-material/FindReplaceSharp';
import LockResetSharpIcon from '@mui/icons-material/LockResetSharp';

export default function Service() {
  return (
    <div className='services'>
        <div className='shipping flex icon'>
            <LocalShippingIcon />
            <p>Fast and Free Delivery</p>
        </div>
        <div className='non-contact flex icon'>
            <PhoneDisabledSharpIcon />
            <p>Non Contact Shipping</p>
        </div>
        <div className='replace flex icon'>
            <FindReplaceSharpIcon />
            <p>Replacement option within 7 days</p>
        </div>
        <div className='payment flex icon'>
            <LockResetSharpIcon />
            <p>Secure Payment</p>
        </div>
    </div>
  )
}
