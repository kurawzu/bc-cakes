import React from 'react'
import './Contact.css'

const Contact = () => {



  const gotoStartedClick2 = () => {
    window.open('https://www.facebook.com/sweetKayks', '_blank');
  };

  return (
    <>
    <div className="Contact" id='Contact'>
        <h1>Contact Us</h1>
       <p> We are located in Mabilao, San Fabian. For orders or customized cake inquiries, kindly contact us at the following number: 
          <span className='red'> 0961 053 0389</span> or you may also reach out to us on Facebook just click the button below.</p>
          <div className="conBut">
       
            <button onClick={gotoStartedClick2}>MESSAGE US</button>
            
          </div>
          


    </div>
    </>
  )
}

export default Contact