import React from "react";
import { Breadcrumbs, SpecialOffers, TrackOrder } from "../components";

import cs from "../scss/global/_index.module.scss";

export const TrackOrderPage: React.FC = () => {
  return (
    <main>
      <h1 className={cs.srOnly}>Order tracking</h1>
      <SpecialOffers />
      <Breadcrumbs />
      <TrackOrder />
    </main>
  );
};
