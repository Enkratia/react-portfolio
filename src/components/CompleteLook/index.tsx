import React from "react";
import { Arrow } from "../../iconComponents";

import { useGetAllCatalogProductsQuery, useGetCompleteLookQuery } from "../../redux/backendApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Product } from "../../components";

import s from "./CompleteLook.module.scss";
import cs from "../../scss/global/_index.module.scss";

type CompleteLookProps = {
  productId: string;
};

export const CompleteLook: React.FC<CompleteLookProps> = ({ productId }) => {
  const clickableRef = React.useRef(true);
  const sliderRef = React.useRef<Slider>(null);

  let lookImage: string | undefined;
  let productIds = [] as number[] | undefined;

  const { data } = useGetCompleteLookQuery(productId);
  lookImage = data?.[0].lookImage;
  productIds = data?.[0].productIds;
  const productsRequest = `?id=${productIds?.slice(0, 6)?.join("&id=")}`;

  const { data: products } = useGetAllCatalogProductsQuery(productsRequest, {
    skip: !productIds || productIds.length === 0,
  });

  if (!data || !products) return;

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
    dots: true,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 414,
        settings: {
          dots: true,
          arrows: false,
          swipe: true,
          swipeToSlide: true,
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={`${s.root} ${cs.flatPagination}`}>
      <h2 className={cs.srOnly}>Products that complete fashion.</h2>

      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        {/* <!-- Head --> */}
        <div className={s.head}>
          <p className={`${s.title} ${cs.sectionTitle}`}>Complete your look</p>

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

        {/* <!-- Content --> */}
        <div className={s.content}>
          {/* <!-- Image --> */}
          <div className={s.imageWrapper}>
            <img src={lookImage} alt="Product image." className={s.image} />
          </div>

          {/* <!-- Slider --> */}
          <div>
            <Slider ref={sliderRef} swipeEvent={swipeEvent} {...settings} className={s.slider}>
              {products.map((product) => (
                <Product key={product.id} obj={product} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
