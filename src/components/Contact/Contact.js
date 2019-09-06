import React from "react";
import Bounce from 'react-reveal/Bounce';
import './Contact.scss'

class Contact extends React.Component {
  render() {
    return (

      <Bounce left>
        <div className='contact-container'>
          <div className='address-container'>
          <h5>123 Any Street</h5>
          <h5>City</h5>
          <h5>Somewhere on Planet Earth</h5>
          <h5>Some continent</h5>
          <h5>+00 1234 1234 1234</h5>
          <h5>somewhere@nomatter.com</h5>
          </div>
          <form className='form-container' action="">
            <input className='name' type="text" placeholder='Name'/>
            <input className='email' type="email" placeholder='Email' />
            <textarea className="contact-area" name="contact-area" id="" cols="30" rows="10" placeholder='Your message'></textarea>
            <button className='send-btn'>Send</button>
          </form>
        </div>
      </Bounce>

    )
  }
}

export default Contact;