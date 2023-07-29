import React from "react";
import { Breadcrumbs, SpecialOffers, Checkout } from "../components";

import cs from "../scss/global/_index.module.scss";

export const CheckoutPage: React.FC = () => {
  return (
    <main>
      <h1 className={cs.srOnly}>Checkout</h1>
      <SpecialOffers />
      <Breadcrumbs />
      <Checkout />
    </main>
  );
};
