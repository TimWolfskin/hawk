import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
import Navbar from "./Navbar";

const HeroBanner = ({ HeroBanner }) => {
  return (
    <div className="hero-banner-container">
      <Navbar />
      <div className="banner-content">
        <p className="product-title">{HeroBanner.smallText}</p>
        <h3>{HeroBanner.midText}</h3>
        <h1>{HeroBanner.largeText1}</h1>
        <div className="desc">
          <p>{HeroBanner.desc}</p>
        </div>
        <Link href={`/product/${HeroBanner.product}`}>
          <button className="hero-banner-btn" type="button">
            {HeroBanner.buttonText}
          </button>
        </Link>
        <img
          className="hero-banner-image"
          src={urlFor(HeroBanner.image)}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroBanner;
