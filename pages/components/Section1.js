import React from "react";
import Image from "next/image";
import Link from "next/link";

function Section1() {
  return (
    <section className="section-1">
      <div className="nav-whole-div">
        <div className="nav-logo-div">
          <Link passHref href="/">
            <a>
              <Image
                src="/images/logo.svg"
                alt="Kashflow Logo"
                width={99}
                height={30}
              />
            </a>
          </Link>
        </div>
        <ul className="nav-ul-div">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">Services</a>
          </li>
          <li>
            <a href="#about">Features</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
        </ul>
        <div className="nav-btn-div">
          <button className="sign-up-btn">Sign up</button>
          <button className="login-btn">Login</button>
        </div>
      </div>
      <div className="div-bellow-nav">
        <div className="left-div">
          <h1 className="first-heading">
            We know how <br /> to keep your <br /> finances in check
          </h1>

          <div className="blue-curve-div">
            <Image
              className="curve"
              src="/images/blue-curve.png"
              alt="a blue curve"
              width={261}
              height={26.73}
            />
          </div>

          <p className="first-paragraph ">
            Control your spending. We have a better solution for you. Meet your
            new mobile app that will make your finances easy and soft. Feel the
            technology and check our innovation
          </p>
          <div className="download-div">
            <Link passHref href="/">
              <a>
                <Image
                  src="/images/playstore.png"
                  alt="PlayStor Icon"
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
        <div className='right-div'>
        <div className="right-content-div">
          <div className='left-notification-div'>
            {" "}
              <Image
              src="/images/notification-1.png"
              alt="AppStore Icon"
              width={225}
              height={75}
            />
          </div>
          <div className='phone-img'>
            {" "}
              <Image
         
              src="/images/mobile-main-page.png"
              alt="AppStore Icon"
              width={349}
              height={725}
            />
          </div>
          <div  className='right-notification-div'>
            <div>
              {" "}
              <Image
                src="/images/notification-2.png"
                alt="AppStore Icon"
                width={225}
                height={75}
              />
            </div>

            <div>
              {" "}
              <Image
                src="/images/notification-3.png"
                alt="AppStore Icon"
                width={225}
                height={75}
              />
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
}

export default Section1;
