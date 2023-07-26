import React from "react";
import { SpecialOffers } from "../components";

import cs from "../scss/global/_index.module.scss";
import { Checkout } from "../components/Checkout";

export const CheckoutPage: React.FC = () => {
  return (
    <main>
      <h1 className={cs.srOnly}>Checkout</h1>
      <SpecialOffers />
      <Checkout />
    </main>
  );
};
