import React from 'react'
import ErrorImg from '../images/error.jpg';
import '../styles/Error.css'

export default function Error() {
  return (
    <div className='error'>
      <img src={ErrorImg} alt='error'/>
    </div>
  )
}
