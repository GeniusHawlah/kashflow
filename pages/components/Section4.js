import React from 'react'
import Link from "next/link";
import Image from "next/image";


function Section4() {
  return (
      <div className='section-4'>
          <div className="sec-4-top-div">
              <div className="top-div-left-content">
                  <h1 className='sec-4-h1'>The integration of
technology and design</h1>
                  <p className='sec-4-p'>The latest technology makes it possible to design useful solutions. We keep up with current trends.</p>
              
                  <div className="sec-4-download-btn-div">
            <Link passHref href="/">
              <a>
                <Image
                  src="/images/playstore.png"
                  alt="PlayStore Icon"
                  width={265}
                  height={75}
                />
              </a>
            </Link>
            <Link passHref href="/">
              <a>
                <Image
                  src="/images/appstore.png"
                  alt="AppStore Icon"
                  width={225}
                  height={75}
                />
              </a>
            </Link>
          </div>
               
              </div>
              <div className="sec-4-right-img-div">
              <Image
              src="/images/section-4-right-img.png"
              alt="AppStore Icon"
              width={661}
              height={753.11}
            />
              </div>
          </div>
          <div className="sec-4-bottom-div">
              <div className="sec-4-bottom-left-img-div">
              <Image
              src="/images/sec-4-cards-page.svg"
              alt="AppStore Icon"
              width={383}
              height={384}
            />
              </div>
              <div className="sec-4-right-content-div">
                  <h1 className='sec-4-h1-2'>Add various Bank cards
to your account</h1>
                  <p className='sec-4-p2'>Get to add all of your bank cards to your wallet for easy transactions.</p>
                  <div className="sec-4-download-btn-div2">
            <Link passHref href="/">
              <a>
                <Image
                  src="/images/playstore.png"
                  alt="PlayStore Icon"
                  width={265}
                  height={75}
                />
              </a>
            </Link>
            <Link passHref href="/">
              <a>
                <Image
                  src="/images/appstore.png"
                  alt="AppStore Icon"
                  width={225}
                  height={75}
                />
              </a>
            </Link>
          </div>
              </div>
          </div>
    </div>
  )
}

export default Section4