import React from 'react'
import '../styles/Contact.css'

export default function Contact() {
  return (
    <>
    <div className='contact'>
      <p>Feel Free to Contact Us</p>
      <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7821.946548500887!2d76.6832654935791!3d11.409485900000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bde94e28693d%3A0xfc8827a413102b9f!2sQueen%20of%20Hills%20-%20Travels!5e0!3m2!1sen!2sin!4v1708090034706!5m2!1sen!2sin" width="100%" 
      height="400" 
      style={{border: 0}} 
      allowfullscreen=""
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className='container-form'>
        <form action='https://formspree.io/f/mdoqezjz' method='POST'>
          <input type='text' placeholder='username' name='username' required autoComplete='off' />
          <input type='email' placeholder='Email' name='Email' required autoComplete='off'  />
          <textarea name="Message" cols='30' rows='10' required autoComplete='off' placeholder='Enter your message' />
          <input type='submit' value='send' className='submit'></input>
        </form>
      </div>
    </div>
    </>
  )
}
