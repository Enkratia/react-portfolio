import React from "react";

export const HeaderCartMenu: React.FC = () => {
  return (
    <div className="cart__choice cart-choice">
      <div className="cart__choice-top cart-choice__top">
        <h5 className="cart-choice__title">
          Your cart
          <span className="cart-choice__title-count">(0)</span>
        </h5>

        <button className="cart-choice__close" aria-label="Close cart.">
          {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <use href="./img/sprite.svg#cross" aria-hidden="true"></use>
              </svg> */}
        </button>
      </div>

      {/* <!-- Cart choice list --> */}
      <div className="cart-choice__list-wrapper" data-overlayscrollbars-initialize>
        <ul className="cart-choice__list"></ul>
      </div>

      {/* <!-- Cart choice bottom --> */}
      <div className="cart-choice__bottom">
        <div className="cart-choice__subtotal">
          <span className="cart-choice__subtotal-title">Subtotal:</span>

          <span className="cart-choice__subtotal-sum">$0</span>
        </div>

        <a href="./checkout.html" className="cart-choice__checkout btn btn--lg">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <use href="./img/sprite.svg#wallet" aria-hidden="true"></use>
          </svg>
          Checkout
        </a>
      </div>
    </div>
  );
};
