import React from "react";

import { useGetAllCatalogProductsQuery } from "../../redux/backendApi";
import { ProductType } from "../../redux/backendApi/types";

import { Product } from "../Product";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./RecentlyViewed.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Arrow } from "../../iconComponents";

type RecentlyViewedProps = {
  product: ProductType;
};

export const RecentlyViewed: React.FC<RecentlyViewedProps> = ({ product }) => {
  const clickableRef = React.useRef(true);
  const sliderRef = React.useRef<Slider>(null);

  React.useEffect(() => {
    let filtered = [] as number[];
    const viewedFromLS = localStorage.getItem("recentlyViewed");

    if (viewedFromLS) {
      const viewed = JSON.parse(viewedFromLS) as number[];
      filtered = viewed.filter((id) => (id === +product.id ? false : true));
    }

    localStorage.setItem("recentlyViewed", JSON.stringify([...filtered, product.id]));
  }, [product.id]);

  const { data } = useGetAllCatalogProductsQuery("");
  if (!data) return;

  // **
  const handleClick = (event: MouseEvent) => {
    // Для swipeEvent
    if (!clickableRef.current) {
      event.stopPropagation();
      event.preventDefault();
    }
    clickableRef.current = true;
  };

  const swipeEvent = () => {
    // Фикс (слайдер воспринимает свайп, как клик)
    if (sliderRef?.current?.innerSlider?.list) {
      sliderRef.current.innerSlider.list.onclick = handleClick;
      clickableRef.current = false;
    }
  };

  let settings = {
    arrows: false,
    dots: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 414,
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
          <h2 className={`${s.title} ${cs.sectionTitle}`}>Recently viewed</h2>

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
          <Slider ref={sliderRef} swipeEvent={swipeEvent} {...settings}>
            {data.map((obj) => (
              <Product key={obj.id} obj={obj} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
