import React from "react";
import { Link } from "react-router-dom";

export default function Banner2() {
  return (
    <section className="flat-spacing-3 bg-yellow-1">
      <div className="container">
        <div className="s3-banner-with-text">
          <div className="content-with-text wow fadeInUp">
            <div className="box-title-content">
              <span className="subtitle text-md fw-medium">
                Available at Wholesale Rates
              </span>
              <h2 className="title fw-semibold font-7">
                 The Most Authentic Diamond Jewellery
              </h2>
              <p className="desc text-main text-md">
                Eves24 offers not just IGI Certified diamond Jewelry but we are pioneer in India to 
                offer diamond jewelry Certified & SEALED by IGI in a temper proof pack. As soon as 
                the sealed package is opened, the SEAL becomes VOID. So you are ensured that 
                the package is opened only by you, after the certification is done by IGI.
                IGI (International Gemological Institute) is the world's most trusted and 
                reputed organization for checking the authenticity of diamond jewellery.
              </p>
              <p className="desc text-main text-md">
               You can find IGI certificate number engraved on every piece of Jewellery & the authenticity
                of jewellery can be cross verified on IGI's website (www.igi.org). Most important, IGI also
                certifies the Diamonds used in the jewellery to be NATURAL. Beware of man-made laboratory 
                grown CVD diamonds that have flooded the markets.
              </p>
            </div>
            <Link
              to={`/shop-default`}
              className="tf-btn bg-brown-14 animate-btn border-0"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>
          <div className="image-banner">
            <div className="image image-1 hover-img">
              <div
                className="shine-item img-style wow fadeInRight"
                data-wow-delay="0.1s"
              >
                <img
                  alt=""
                  src="/images/banner/sub-tanishq-07.webp"
                  className=" ls-is-cached lazyloaded"
                  width={534}
                  height={543}
                />
              </div>
            </div>
            <div className="image image-2 hover-shine hover-img">
              <div className="shine-item img-style wow fadeInRight">
                <img
                  alt=""
                  src="/images/banner/Tanishq-07.webp"
                  className=" ls-is-cached lazyloaded"
                  width={951}
                  height={951}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
