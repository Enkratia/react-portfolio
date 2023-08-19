import React from "react";
import { Arrow } from "../../iconComponents";

import { useGetCompleteLookQuery } from "../../redux/backendApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./CompleteLook.module.scss";
import cs from "../../scss/global/_index.module.scss";

type CompleteLookProps = {
  productId: string;
};

export const CompleteLook: React.FC<CompleteLookProps> = ({ productId }) => {
  const { data } = useGetCompleteLookQuery(productId);
  console.log(data);

  let settings = {
    swipe: false,
    dots: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    responsive: [
      // {
      //   breakpoint: 1330,
      //   settings: {
      //     swipe: true,
      //     dots: true,
      //     swipeToSlide: true,
      //     slidesToScroll: 1,
      //     slidesToShow: 5,
      //   },
      // },
    ],
  };

  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>Products that complete fashion.</h2>

      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        {/* <!-- Title --> */}
        <p className={`${s.title} ${cs.sectionTitle}`}>Complete your look</p>

        {/* <!-- Content --> */}
        <div className={s.content}>
          {/* <!-- Image --> */}
          <div className={s.imageWrapper}>
            <img src="" alt="Product image." className={s.image} />
          </div>

          {/* <!-- Slider --> */}
          <div className={s.slider}>
            <Slider {...settings}>{/* Slide  */}</Slider>

            {/* <!-- Pagination --> */}
            {/* <div className="complete-look__pagination flat-pagination"></div> */}

            {/* <!-- Navigation --> */}
            {/* <button
              className="complete-look__button-prev arrow arrow--trans"
              aria-label="Choose previous slide.">
              <Arrow aria-hidden="true" />
            </button> */}

            {/* <button
              className="complete-look__button-next arrow arrow--trans"
              aria-label="Choose next slide.">
              <Arrow aria-hidden="true" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
