import React from 'react'
import Image from "next/image";


function Section2() {
  return (
      <section className='section-2'>
      <div className='sec-2-left-div'>
      <Image
              src="/images/cards.png"
              alt="AppStore Icon"
              width={424.56}
              height={345.72}
            />
       </div>
      <div className='sec-2-right-div'>
     
          <h1 className='sec-2-h2'>One tool, one way to control transactions</h1>
          <p className='sec-2-p'>All your transactions, receipts and expenses in one smart app. <br />Control your budget in real-time. Transfer funds to any account anywhere in the world. Convert funds to any currency in real-time.</p>
          <button className='sec-2-btn'> Read More</button>
 
       </div>
 
    </section>
  )
}

export default Section2