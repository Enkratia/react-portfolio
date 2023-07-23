import React from "react";
import { Link } from "react-router-dom";
import { useGetSaleQuery } from "../../redux/backendApi";

import { Product } from "../Product";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./Sale.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Arrow } from "../../iconComponents";

export const Sale: React.FC = () => {
  const sliderRef = React.useRef<Slider>(null);
  const { data } = useGetSaleQuery();
  if (!data) return;

  let settings = {
    arrows: false,
    dots: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <div className={s.head}>
          <h2 className={`${s.title} ${cs.sectionTitle}`}>Sale up to 70%</h2>

          <div className={s.btns}>
            <button
              onClick={() => sliderRef?.current?.slickPrev()}
              className={`${s.btn} ${cs.arrow} ${cs.arrowTrans}`}
              aria-label="Got to the previous slide.">
              <Arrow aria-hidden="true" />
            </button>

            <button
              onClick={() => sliderRef?.current?.slickNext()}
              className={`${s.btn} ${cs.arrow} ${cs.arrowTrans}`}
              aria-label="Go to the next slide.">
              <Arrow aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={s.slider}>
          <Slider ref={sliderRef} {...settings}>
            {data.map((obj) => (
              <Product key={obj.id} obj={obj} mode="lg" />
            ))}
          </Slider>
        </div>

        {/* <!-- Button --> */}
        <Link to={"/"} className={`${s.button} ${cs.btn} ${cs.btnLg} ${cs.btnOutline}`}>
          See all sale products
        </Link>
      </div>
    </section>
  );
};
