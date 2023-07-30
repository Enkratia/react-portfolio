import React from "react";
import { SpecialOffers, NotFound } from "../components";

import cs from "../scss/global/_index.module.scss";
import { Outlet } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  return (
    <main>
      <h1 className={cs.srOnly}>Checkout</h1>
      <SpecialOffers />
      <NotFound />

      <Outlet />
    </main>
  );
};
