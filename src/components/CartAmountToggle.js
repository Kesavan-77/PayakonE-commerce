import React from 'react'

export default function CartAmountToggle({amount,setDecrease, setIncrease}) {
  return (
    <div>
        <span onClick={() => setDecrease()}>-</span>
        <span>{amount}</span>
        <span onClick={() => setIncrease()}>+</span>
    </div>
  )
}
