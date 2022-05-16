import React from "react";
import Image from "next/image";

function Section3() {
  return (
    <div className="section-3">
      <div className="sec-3-top-div">
        <div className="each-icon-and-text">
          <Image
            src="/images/transfer-icon.svg"
            alt=""
            width={100}
            height={100}
          />
          <p>
            Easily transfer funds from your account to any account/bank of your
            choice
          </p>
        </div>
        <div className="each-icon-and-text">
          <Image
            src="/images/convert-icon.svg"
            alt=""
            width={100}
            height={100}
          />
          <p>
            Easily transfer funds from your account to any account/bank of your
            choice
          </p>
        </div>
        <div className="each-icon-and-text">
          <Image
            src="/images/electricity-icon.svg"
            alt=""
            width={100}
            height={100}
          />
          <p>
            Easily transfer funds from your account to any account/bank of your
            choice
          </p>
        </div>
      </div>
      <div className="sec-3-bottom-div">
        <div className="each-icon-and-text">
          <Image
            src="/images/airtime.svg"
            alt=""
            width={100}
            height={100}
          />
          <p>
            Easily transfer funds from your account to any account/bank of your
            choice
          </p>
        </div>
        <div className="each-icon-and-text">
          <Image
            src="/images/cable-icon.svg"
            alt=""
            width={100}
            height={100}
          />
          <p>
            Easily transfer funds from your account to any account/bank of your
            choice
          </p>
        </div>
        <div className="each-icon-and-text">
          <Image
            src="/images/internet-icon.svg"
            alt=""
            width={100}
            height={100}
          />
          <p>
            Easily transfer funds from your account to any account/bank of your
            choice
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
