import React from "react";
import { Hero, NewArrivals, SpecialOffers, TopCategories } from "../components";

import cs from "../scss/global/_index.module.scss";

export const Home: React.FC = () => {
  return (
    <>
      <h1 className={cs.srOnly}>Internet shop Createx</h1>
      <SpecialOffers />
      <Hero />
      <TopCategories />
      <NewArrivals />
    </>
  );
};
