import React from "react";
import {
  Banners,
  Blog,
  Brands,
  CTA,
  Hero,
  Instagram,
  NewArrivals,
  PopularCategories,
  Sale,
  Services,
  SpecialOffers,
  Subscribe,
  TopCategories,
  TrendingNow,
} from "../components";

import cs from "../scss/global/_index.module.scss";

export const Home: React.FC = () => {
  return (
    <main>
      <h1 className={cs.srOnly}>Internet shop Createx</h1>
      <SpecialOffers />
      <Hero />
      <TopCategories />
      <NewArrivals />
      <Banners />
      <PopularCategories />
      <TrendingNow />
      <Sale />
      <CTA />
      <Services />
      <Instagram />
      <Blog />
      <Brands />
      <Subscribe />
    </main>
  );
};
