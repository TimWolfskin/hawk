import React from "react";
import Image from "next/image";

const Discount = () => {
  return (
    <div className="discount-wrapper">
      <div className="discount-items">
        <div className="discount-item">
          <Image
            className="discount-item__image"
            src="/discount-1.jpg"
            alt=""
            width={500}
            height={600}
          />
          <h4 className="discount-item__title">NEW IN</h4>
          <p className="discount-item__text">
            Spring get-ups and new-season radness from Carhartt, Dr. Martens,
            O'Neill, Patagonia and more.
          </p>
          <a className="discount-item__link" href="#">
            shop new in
          </a>
        </div>

        <div className="discount-item">
          <Image
            className="discount-item__image"
            src="/discount.webp"
            alt=""
            width={500}
            height={600}
          />
          <h4 className="discount-item__title">OUTLET</h4>
          <p className="discount-item__text">
            Massive savings on jackets, footwear, t-shirts and heaps more.
          </p>
          <a className="discount-item__link" href="#">
            shop outlet
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discount;
