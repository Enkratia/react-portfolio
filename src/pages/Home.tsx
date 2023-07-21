import React from "react";
import {
  Banners,
  Hero,
  NewArrivals,
  PopularCategories,
  SpecialOffers,
  TopCategories,
  TrendingNow,
} from "../components";

import cs from "../scss/global/_index.module.scss";

export const Home: React.FC = () => {
  return (
    <>
      <h1 className={cs.srOnly}>Internet shop Createx</h1>
      <SpecialOffers />
      <Hero />
      <TopCategories />
      <NewArrivals />
      <Banners />
      <PopularCategories />
      <TrendingNow />
    </>
  );
};
