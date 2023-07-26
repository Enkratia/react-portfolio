import React from "react";

export const CheckoutReview: React.FC = () => {
  return (
    <div className="checkout__products">
      <ul className="checkout__products-list"></ul>

      <span className="checkout__products-subtotal">
        Subtotal:
        <span className="checkout__products-subtotal-count"></span>
      </span>
    </div>
  );
};
