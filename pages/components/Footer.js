import React from 'react'

function Footer() {
  return (
    <footer className='footer-div'>
      <div className="footer-left-content">
        <h1 className='text-3xl'>KASHflow</h1>
        <p className="text-xl">All your transactions, receipts and expenses in one smart app, Control your budget in real-time. Transfer funds to any account anywhere in the world. Convert frunds to any currency in real-time.</p>
        <p className="text-lg">@Copyright 2022 by GeniusHawlah. All rights reserved</p>
      </div>
      <div className="footer-right-content">
        <div className='footer-right-top-div'>
          <div className="div1">
            <p className='font-bold'>Support</p>
            <p>Help</p>
            <p>FAQ</p>
            <p>Contact Form</p>
</div>
          <div className="div2">
          <p className='font-bold'>Product</p>
            <p>About</p>
            <p>Service</p>
            <p>Features</p>
</div>
          <div className="div3">
          <p className='font-bold'>Legal</p>
            <p>Terms</p>
            <p>Privacy Policy</p>
            <p>Cookies Policy</p>
</div>
        </div>

        <div className='footer-right-bottom-div'>
          <p className='font-bold'>Address</p>
          <div className='flex space-x-10'>
            <p>3044 Hill Road California</p>
            <p>408 842 4008</p>
            <p>support@kashflow.com</p>
         </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer