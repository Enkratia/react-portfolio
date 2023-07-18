import React from "react";
import { Link } from "react-router-dom";

import { Product } from "../Product";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./NewArrivals.module.scss";
import cs from "../../scss/global/_index.module.scss";

const test = ["", "", "", "", "", "", ""];

const NewArrivalsSlider: React.FC = () => {
  // const { data } = useGetTopCategoriesQuery();

  let settings = {
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 6,
    swipeToSlide: true,
  };

  // if (!data) return;

  return (
    <Slider {...settings}>
      {test.map(() => (
        <Product />
      ))}
    </Slider>
  );
};

export const NewArrivals: React.FC = () => {
  return (
    <section className={`${s.root} ${cs.flatPagination}`}>
      <div className={`${s.container} ${cs.containerWide}`}>
        <h2 className={`${s.title} ${cs.sectionTitle}`}>New arrivals</h2>

        <div className={s.subtitle}>
          <div className={s.descr}>Check out our latest arrivals for the upcoming season</div>

          <Link to={"/"} className={s.more}>
            See the collection here
          </Link>
        </div>

        {/* <!-- Slider --> */}
        <div className={s.slider}>
          <NewArrivalsSlider />
        </div>
      </div>
    </section>
  );
};
